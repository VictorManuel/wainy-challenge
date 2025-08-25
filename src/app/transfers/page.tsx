"use client";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import BottomWhiteContainer from "@/ui/commons/BottomWhiteContainer";
import TransactionsList from "@/ui/commons/TransactionsList";
import TransactionItemWithAvatar from "@/ui/commons/TransactionItemWithAvatar";
import TopBar from "@/ui/commons/TopBar";

export default function TransfersPage() {
  const transactions = useTransactionsStore((s) => s.transactions);
  const transfers = transactions.filter((transaction) => transaction.transfer);

  return (
    <main className="pt-4 flex flex-col min-h-0 justify-start space-y-3 h-full">
      <TopBar title="Transfers" onBack={true} />
      <BottomWhiteContainer className="flex-1 flex flex-col min-h-0">
        <div className="flex-none mb-2 text-center font-medium">Latest Transfers</div>
          <TransactionsList>
            {transfers.map((transaction) => (
                <TransactionItemWithAvatar key={transaction.id} transaction={transaction} />
            ))}
          </TransactionsList>
      </BottomWhiteContainer>
    </main>
  );
}