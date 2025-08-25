"use client";
import Button from "@/ui/commons/Button";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import { useContactsStore } from "@/store/useContactsStore";
import { formatCurrency } from "@/lib/formats";
import Card from "@/ui/commons/Card";
import { useRouter, useParams } from "next/navigation";
import TopBar from "@/ui/commons/TopBar";
import Avatar from "@/ui/commons/Avatar";

export default function TransferDetailsPage() {
  const router = useRouter();
  const { transferId } = useParams<{ transferId: string }>();
  
  const transaction = useTransactionsStore((s) => 
    s.transactions.find(t => t.id === transferId && t.transfer)
  );

  const contact = useContactsStore((s) => 
    transaction?.contactId ? s.contacts.find(c => c.id === transaction.contactId) : null
  );

  if (!transaction) {
    return (
      <main className="p-4">
        <TopBar title="Transfer Details" onBack={true} />
        <div className="text-sm text-gray-500 mt-4">Transfer not found.</div>
        <Button onClick={() => router.push("/")} className="mt-4">Back to Home</Button>
      </main>
    );
  }

  return (
    <main className="pt-4 space-y-4">
      <TopBar title="Transfer Details" onBack={true} />
      <Card>
        <div className="mt-4 text-center text-m font-bold text-emerald-600">Transfer Successful</div>
        <div className="text-center text-sm text-gray-400">Your transaction was successful</div>
        <div className="mt-6 text-center text-3xl font-semibold">
          {formatCurrency(Math.abs(transaction.amount))}
        </div>
        <div className="mt-6 text-sm text-center font-bold">Sent to</div>
        {contact ? (
          <div className="flex items-center justify-center gap-3 mt-4">
            <Avatar avatar={contact.avatar} name={contact.fullName} size={48} />
            <div className="font-medium">{contact.fullName}</div>
          </div>
        ) : (
          <div className="font-medium text-gray-400 mt-4 text-sm">{transaction.title}</div>
        )}
        <div className="mt-6 text-sm text-left font-bold">Transaction details</div>
        {transaction.notes && (
          <>
            <div className="mt-4 text-sm">Notes</div>
            <div className="text-gray-600">{transaction.notes}</div>
          </>
        )}
        <div className="flex align-middle justify-between gap-2 w-full mt-4">
          <div className="text-sm text-gray-400">Payment</div>
          <div className="text-right font-bold">{formatCurrency(Math.abs(transaction.amount))}</div>
        </div>
        <div className="flex align-middle justify-between gap-2 w-full mt-1">
          <div className="text-sm text-gray-400">Notes</div>
          <div className="text-right font-bold">{transaction.notes || "No notes"}</div>
        </div>
                 <div className="flex align-middle justify-between gap-2 w-full mt-1">
           <div className="text-sm text-gray-400">Date</div>
           <div className="text-right font-bold">{new Date(transaction.date).toLocaleDateString('en-US', { 
             year: 'numeric', 
             month: 'long', 
             day: 'numeric' 
           })}</div>
         </div>
        <div className="flex align-middle justify-between gap-2 w-full mt-1">
          <div className="text-sm text-gray-400">Time</div>
          <div className="text-right font-bold">{new Date(transaction.date).getHours()}:{new Date(transaction.date).getMinutes()}</div>
        </div> 
        <div className="flex align-middle justify-between gap-2 w-full mt-1">
          <div className="text-sm text-gray-400">Reference Number</div>
          <div className="text-right font-bold">#{transaction.id}</div>
        </div>        
      </Card>
      <div className="flex flex-col gap-2 p-4">
        <Button variant="outline" onClick={() => console.log("share")}>Share</Button>
        <Button variant="secondary" onClick={() => router.push("/")}>Back to Home</Button>
      </div>
    </main>
  );
}
