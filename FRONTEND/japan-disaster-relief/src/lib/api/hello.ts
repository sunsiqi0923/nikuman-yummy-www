import { apiGet } from "./client";

export type HelloResponse = {
	message: string;
};

export function fetchHello(): Promise<HelloResponse> {
	return apiGet<HelloResponse>("/api/hello");
}
