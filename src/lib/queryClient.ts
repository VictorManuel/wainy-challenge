import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, refetchOnWindowFocus: false },
  },
});

export const QK = {
  user: ["user"] as const,
  contacts: ["contacts"] as const,
};