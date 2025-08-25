"use client";
import { useUserStore } from "@/store/useUserStore";
import { formatCurrency } from "@/lib/formats";

export default function BalanceCard() {
  const { balance } = useUserStore();
  return (
    <>
      <div className="text-lg text-white mt-2 mb-0 w-full text-center">Your Balance</div>
      <div className="mt-0 mb-6 text-3xl font-semibold text-white w-full text-center">{formatCurrency(balance)}</div>
    </>
  );
}