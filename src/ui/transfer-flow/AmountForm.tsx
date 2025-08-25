"use client";
import { useState } from "react";
import Button from "@/ui/commons/Button";
import Input from "@/ui/commons/Input";
import Textarea from "@/ui/commons/Textarea";
import { useUserStore } from "@/store/useUserStore";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import { useContactsStore } from "@/store/useContactsStore";
import { useRouter } from "next/navigation";
import Avatar from "../commons/Avatar";

export default function AmountForm({ contactId }: { contactId: string }) {
  const balance = useUserStore((s) => s.balance);
  const router = useRouter();
  const [amount, setAmount] = useState<number>(1500);
  const [notes, setNotes] = useState<string>("");
  const addToBalance = useUserStore((s) => s.addToBalance);
  const addTransaction = useTransactionsStore((s) => s.addTransaction);
  const contact = useContactsStore((s) => s.contacts.find((c) => c.id === contactId));

  if (!contact) return null;

  const submit = () => {
    const id = crypto.randomUUID();
    const transaction = {
      id: id,
      contactId: contact.id,
      title: contact.fullName,
      incomming: false,
      amount: -Math.abs(amount),
      notes,
      transfer: true,
      date: new Date().toISOString(),
    };
    addToBalance(transaction.amount);
    addTransaction(transaction);
    router.push(`/transfer/details/${id}`);
  };

  return (
    <div className="space-y-4 p-4 ">
      <div className="rounded-3xl flex flex-col items-center">
        <Avatar avatar={contact.avatar} name={contact.fullName} size={64} />
        <div className="text-xs text-gray-500 mt-1 font-bold">{contact.fullName}</div>
        <div className="text-lg text-gray-500 mt-2">Set Amount</div>
        <Input
          type="number"
          min={0}
          value={amount.toString()}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="text-center text-lg font-bold border-none bg-transparent focus:ring-0 focus:ring-offset-0 w-fit"
        />
        <div className="mt-3 text-left text-sm text-gray-500 w-full">Notes</div>
        <Textarea placeholder="For food" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <Button disabled={amount <= 0 || amount > balance} onClick={submit}>Proceed to Transfer</Button>
    </div>
  );
}