"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchHello } from "@/lib/api/hello";

export default function Home() {
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["hello"],
		queryFn: fetchHello,
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
			<h1 className="text-2xl font-bold">Japan Disaster Relief</h1>
			<p className="text-sm text-gray-500">Message from backend API:</p>
			{isPending && <p className="text-lg">Loading...</p>}
			{isError && <p className="text-lg text-red-600">Error: {error.message}</p>}
			{data && <p className="text-4xl font-semibold">{data.message}</p>}
		</main>
	);
}
