"use client";
import BalanceCard from "@/ui/home/BalanceCard";
import BalanceSkeleton from "@/ui/home/BalanceSkeleton";
import SendAgainList from "@/ui/home/SendAgainList";
import ContactsSkeleton from "@/ui/home/ContactsSkeleton";
import TransactionsSkeleton from "@/ui/home/TransactionsSkeleton";
import { useUserStore } from "@/store/useUserStore";
import { useContactsStore } from "@/store/useContactsStore";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import { useUserQuery } from "@/queries/user";
import { useContactsQuery } from "@/queries/contacts";
import { useEffect } from "react";
import { UserHeader } from "@/ui/home/UserHeader";
import { UserHeaderSkeleton } from "@/ui/home/UserHeaderSkeleton";
import BottomWhiteContainer from "@/ui/commons/BottomWhiteContainer";
import LastTransactions from "@/ui/home/LastTransactions";
import { Transaction } from "@/types/transaction";


export const mock: Transaction[] = [
  {
    id: "1",
    contactId: "contact-1",
    title: "María García",
    amount: 150.00,
    notes: "Pago de servicios",
    date: "2024-01-15T10:30:00Z",
    transfer: true
  },
  {
    id: "3",
    contactId: "contact-2",
    title: "Internet",
    amount: -75.50,
    notes: "Reembolso",
    date: "2024-01-14T16:45:00Z",
    transfer: false
  },
  {
    id: "2",
    contactId: "contact-3",
    title: "Ana Martínez",
    amount: 200.00,
    notes: "Préstamo",
    date: "2024-01-13T09:15:00Z",
    transfer: true
  },
  {
    id: "4",
    contactId: "contact-3",
    title: "Salary",
    amount: 200.00,
    notes: "Paychex",
    date: "2024-01-13T09:15:00Z",
    transfer: false
  },{
    id: "5",
    contactId: "contact-3",
    title: "Ana Martínez",
    amount: 200.00,
    notes: "Préstamo",
    date: "2024-01-13T09:15:00Z",
    transfer: true
  },
];

export default function HomePage() {
  const user = useUserStore((s) => s.user);
  const contacts = useContactsStore((s) => s.contacts);
  const transactions = useTransactionsStore((s) => s.transactions);
  const addTransaction = useTransactionsStore((s) => s.addTransaction);

  const userQ = useUserQuery();
  const contactsQ = useContactsQuery(10);

  // Mock transactions
  useEffect(() => {
    if (!transactions.length) {
      mock.forEach(addTransaction);
    }
  }, [transactions.length, addTransaction]);

  const loadingUser = !user && userQ.isPending;
  const loadingContacts = contacts.length === 0 && contactsQ.isPending;

  return (
    <main className="h-full flex flex-col min-h-0 justify-start space-y-4 pt-4 pb-0 max-h-screen">

      {loadingUser ? <UserHeaderSkeleton /> : (
        user && (
          <UserHeader />
        )
      )}
      {loadingUser ? <BalanceSkeleton /> : <BalanceCard />}

      <BottomWhiteContainer className="flex-1 flex flex-col min-h-0">
        {loadingContacts ? <ContactsSkeleton /> : <SendAgainList />}

        {!transactions.length ? <TransactionsSkeleton /> : <LastTransactions />}
      </BottomWhiteContainer>
    </main>
  );
}
