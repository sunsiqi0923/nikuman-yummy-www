# Japan Disaster Relief — Frontend

日本灾害救援 Web 应用的前端项目。基于 [Next.js](https://nextjs.org)（App Router）+ TypeScript + Tailwind CSS 构建，通过 [OpenNext](https://opennext.js.org/cloudflare) 部署到 Cloudflare Workers。

技术选型的背景和理由见 [`../tech-stack.md`](../tech-stack.md)。

## 快速开始

```bash
npm install    # 安装依赖（首次或 package.json 变化后执行）
npm run dev    # 启动本地开发服务器
```

打开 [http://localhost:3000](http://localhost:3000) 查看页面。修改代码后浏览器会自动刷新。

其他命令：

```bash
npm run build     # 类型检查 + 生产构建
npm run lint      # 代码检查
npm run preview   # 在本地 Cloudflare Workers 运行时中验证生产构建
npm run deploy    # 部署到 Cloudflare Workers
```

## 项目结构

```
japan-disaster-relief/
├── package.json          项目依赖清单和 npm 命令定义
├── tsconfig.json         TypeScript 配置
├── next.config.ts        Next.js 配置
├── postcss.config.mjs    Tailwind CSS 接入配置
├── eslint.config.mjs     ESLint 代码检查规则
├── wrangler.jsonc        Cloudflare Workers 部署配置
├── open-next.config.ts   OpenNext（Next.js → Cloudflare 适配层）配置
├── .env.example          环境变量示例（复制为 .env.local 后修改）
├── public/               静态资源（图片等，可通过 URL 直接访问）
└── src/
    ├── app/              页面（目录结构即路由）
    │   ├── layout.tsx    全站共享外壳：HTML 骨架、字体、全局 Provider
    │   ├── page.tsx      首页（路由 /）
    │   ├── providers.tsx TanStack Query 全局配置（重试、缓存策略）
    │   └── globals.css   全局样式（Tailwind 入口）
    └── lib/
        └── api/          后端 API 调用层
            ├── client.ts 通用请求封装（含 mock 开关，见下）
            └── hello.ts  GET /api/hello 接口的封装和类型定义
```

约定：

- **页面**放在 `src/app/` 下，每个路由一个目录，目录中的 `page.tsx` 即该路由的页面。
- **所有后端请求**必须经过 `src/lib/api/`，页面代码不直接调用 `fetch`。每个接口一个文件，导出请求函数和响应类型。

## 后端 API 与 Mock

后端服务尚未就绪，API 层内置了 mock 开关（实现在 [`src/lib/api/client.ts`](src/lib/api/client.ts)）：

- **默认（mock 模式）**：不发网络请求，直接返回 `client.ts` 中 `mocks` 表里写死的数据，并模拟 300ms 网络延迟。新增接口时需要在该表中登记对应的 mock 数据。
- **连接真实后端**：复制 `.env.example` 为 `.env.local`，设置 `NEXT_PUBLIC_API_MOCK=false`，并把 `NEXT_PUBLIC_API_BASE_URL` 指向后端地址。页面代码无需任何改动。

接口定义见 [`/DOCS/API.md`](../../DOCS/API.md)。

## 相关文档

- [Next.js Documentation](https://nextjs.org/docs) — Next.js 功能和 API
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare) — Cloudflare 部署适配
- [TanStack Query](https://tanstack.com/query/latest) — 数据请求与缓存
