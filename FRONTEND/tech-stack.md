# Frontend Tech Stack

Frontend for the Japan disaster relief web application. This document describes the technologies we plan to use and why.

Because this site serves the public during disasters, the frontend prioritizes **fast first paint, usability on slow mobile networks, and accessibility**.

## Core

| Technology | Version | Role |
| --- | --- | --- |
| [TypeScript](https://www.typescriptlang.org/) | 7.x | Language. Static typing for safer, more maintainable code. |
| [React](https://react.dev/) | 19.x | UI library. Component-based user interfaces. |
| [Next.js](https://nextjs.org/) | 16.x (App Router) | React framework. Server-side rendering (SSR) / static generation (SSG) for fast first paint and good SEO — important for users on slow mobile networks during a disaster. |

## Styling

| Technology | Version | Role |
| --- | --- | --- |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework. Fast to develop with and easy to keep consistent. |

## Data Fetching & State Management

| Technology | Version | Role |
| --- | --- | --- |
| [TanStack Query](https://tanstack.com/query/latest) | 5.x | Server state: fetching, caching, and refreshing data from the backend API. Built-in retry and background refetch help on unstable networks. |
| [Zustand](https://zustand.docs.pmnd.rs/) | 5.x | Client state: lightweight global state (e.g. UI state, user session) without Redux boilerplate. |

## Backend Integration

The backend is a separate **Node.js** API service (see [`/BACKEND`](../BACKEND/README.md)). The frontend communicates with it over REST APIs (see [`/DOCS/API.md`](../DOCS/API.md)). All data fetching goes through TanStack Query.

## Development Tooling

| Tool | Role |
| --- | --- |
| [ESLint](https://eslint.org/) | Linting (with `eslint-config-next` and TypeScript rules). |
| [Prettier](https://prettier.io/) | Code formatting. |
| [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Unit / component testing. |
| [Playwright](https://playwright.dev/) | End-to-end testing. |

## Design Principles

- **Mobile-first** — most users will access the site from phones, often in emergency situations.
- **Performance on weak networks** — SSR/SSG, minimal JavaScript, image optimization via `next/image`.
- **Accessibility (a11y)** — semantic HTML and WCAG-conscious UI, so information stays reachable for everyone.
- **Internationalization-ready** — Japanese first; the structure should allow adding English and other languages later (e.g. with `next-intl`).

## Getting Started (planned)

```bash
npx create-next-app@latest --typescript --tailwind --app
```

> Versions above are the latest stable releases as of July 2026 and will be pinned in `package.json` when the project is scaffolded.
