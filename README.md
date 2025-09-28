# alx-project-0x01-setup

This repository contains the Next.js starter project "alx-project-0x01" scaffolded with:
- TypeScript
- ESLint
- Tailwind CSS
- Import alias @/*
- Pages Router (no `app/` directory)

## Project location

- Project root: `alx-project-0x01`
- Public assets: `alx-project-0x01/public/assets/images`

## Getting started

1) Install dependencies

```
npm install --prefix ./alx-project-0x01
```

2) Run the dev server

```
npm run dev --prefix ./alx-project-0x01 -- -p 3000
```

If port 3000 is in use, pick another port, e.g. 3001:

```
npm run dev --prefix ./alx-project-0x01 -- -p 3001
```

3) Open the app

- http://localhost:3000 (or your chosen port)

## Implemented structure

- Styling (Tailwind):
  - `src/styles/globals.css` contains Tailwind directives
- Pages:
  - `src/pages/index.tsx` minimal Welcome page
  - `src/pages/posts/index.tsx` posts listing placeholder
  - `src/pages/users/index.tsx` users placeholder
- Components:
  - `src/components/common/Button.tsx`
  - `src/components/common/PostCard.tsx`
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
- App wrapper:
  - `src/pages/_app.tsx` wraps pages with Header and Footer

## Scripts (from inside project root)

```
cd alx-project-0x01
npm run dev
npm run build
npm run start
npm run lint
```

## Notes
- Tailwind is configured and imported in `src/pages/_app.tsx` via `@/styles/globals.css`.
- Import alias `@/*` is configured in `tsconfig.json`.
