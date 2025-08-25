"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";
import { INITIAL_BALANCE } from "@/lib/constants";

type State = {
  user?: User;
  balance: number;
};
type Actions = {
  setUser: (u: User) => void;
  addToBalance: (delta: number) => void;
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      user: undefined,
      balance: INITIAL_BALANCE,
      setUser: (u) => set({ user: u }),
      addToBalance: (d) => set({ balance: get().balance + d }),
    }),
    { name: "ww_user" }
  )
);