"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "@/services/randomUser.service";
import { QK } from "@/lib/queryClient";
import { useContactsStore } from "@/store/useContactsStore";

export function useContactsQuery(count = 10) {
  const contacts = useContactsStore((s) => s.contacts);
  const setContacts = useContactsStore((s) => s.setContacts);

  const query = useQuery({
    queryKey: [...QK.contacts, count],
    queryFn: () => fetchContacts(count),
    enabled: contacts.length === 0,
    staleTime: 1000 * 60 * 10,
  });

  if (query.data && contacts.length === 0) {
    setContacts(query.data);
  }

  return query;
}