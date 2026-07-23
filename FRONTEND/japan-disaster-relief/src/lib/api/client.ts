/**
 * Minimal REST client for the backend API (see /DOCS/API.md).
 *
 * While the backend is not available, set NEXT_PUBLIC_API_MOCK=true
 * (the default) to serve canned responses from `mocks` below instead
 * of hitting the network.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8787";

const USE_MOCK = process.env.NEXT_PUBLIC_API_MOCK !== "false";

const mocks: Record<string, unknown> = {
	"GET /api/hello": { message: "hello world!" },
};

export async function apiGet<T>(path: string): Promise<T> {
	if (USE_MOCK) {
		const mock = mocks[`GET ${path}`];
		if (mock === undefined) {
			throw new Error(`No mock registered for GET ${path}`);
		}
		// Simulate network latency so loading states are visible in dev.
		await new Promise((resolve) => setTimeout(resolve, 300));
		return mock as T;
	}

	const res = await fetch(`${API_BASE_URL}${path}`);
	if (!res.ok) {
		throw new Error(`GET ${path} failed: ${res.status} ${res.statusText}`);
	}
	return (await res.json()) as T;
}
