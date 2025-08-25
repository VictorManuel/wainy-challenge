"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Transaction } from "@/types/transaction";

type State = { transactions: Transaction[] };
type Actions = {
  addTransaction: (t: Transaction) => void;
  all: () => Transaction[];
};

export const useTransactionsStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      transactions: [],
      addTransaction: (t) => {
        const existing = get().transactions.find(tx => tx.id === t.id);
        if (!existing) {
          set({ transactions: [t, ...get().transactions] });
        }
      },
      all: () => get().transactions,
    }),
    { name: "ww_transactions" }
  )
);