"use client";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import TransactionsList from "../commons/TransactionsList";
import TransactionItemWithIcon from "../commons/TransactionItemWithIcon";

export default function LastTransactions() {
  const transactions = useTransactionsStore((s) => s.transactions);
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="flex-none mb-2 text-center font-medium">Latest Transaction</div>
        <TransactionsList>
          {transactions.map((transaction) => (
            <TransactionItemWithIcon key={transaction.id} transaction={transaction} />
          ))}
        </TransactionsList>
    </div>
  );
}
