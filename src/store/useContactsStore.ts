"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Contact } from "@/types/user";

type State = { contacts: Contact[] };
type Actions = { setContacts: (c: Contact[]) => void };

export const useContactsStore = create<State & Actions>()(
  persist(
    (set) => ({ contacts: [], setContacts: (c) => set({ contacts: c }) }),
    { name: "ww_contacts" }
  )
);