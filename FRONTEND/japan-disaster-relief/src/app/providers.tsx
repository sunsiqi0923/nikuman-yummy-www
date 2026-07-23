"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// Unstable networks during disasters: retry a few times.
						retry: 2,
						staleTime: 30 * 1000,
					},
				},
			}),
	);

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
