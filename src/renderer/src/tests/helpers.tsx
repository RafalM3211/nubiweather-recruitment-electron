import { QueryClient } from "@tanstack/react-query";

export function createQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return queryClient;
}
