"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/services/randomUser.service";
import { QK } from "@/lib/queryClient";
import { useUserStore } from "@/store/useUserStore";

export function useUserQuery() {
  const userInStore = useUserStore((s) => s.user);
  const setUser = useUserStore((s) => s.setUser);

  const query = useQuery({
    queryKey: QK.user,
    queryFn: fetchUser,
    enabled: !userInStore,
    staleTime: 1000 * 60 * 10,
  });

  if (query.data && !userInStore) {
    setUser(query.data);
  }

  return query;
}