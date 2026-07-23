import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
	"/api/*",
	cors({
		origin: [
			"http://localhost:3000",
			"https://front-japan-disaster-relief.tokyo-odh-108.workers.dev",
		],
		allowMethods: ["GET", "POST", "OPTIONS"],
	}),
);

const api = new Hono();

api.get("/hello", (c) => c.json({ message: "hello world!" }));

// Add future API route groups here and mount them under /api.
app.route("/api", api);

app.get("/health", (c) => c.json({ status: "ok" }));

app.notFound((c) => c.json({ error: "Not Found" }, 404));

export default app;
