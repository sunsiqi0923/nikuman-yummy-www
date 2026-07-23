# Japan Disaster Relief API

基于 Cloudflare Workers、Hono 和 TypeScript 的后端 API。

## 本地开发

```bash
npm install
npm run dev
```

Wrangler 默认监听 `http://localhost:8787`，与前端默认的 `NEXT_PUBLIC_API_BASE_URL` 一致。

## 部署

配置 Cloudflare 凭据后运行：

```bash
npm run deploy
```
