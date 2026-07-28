# Cardápio — Espetinho da Dedé

Cardápio digital estático, responsivo e otimizado para celulares.

## Requisitos

- Node.js 22.13.0
- pnpm 11.9.0

As versões estão fixadas no `package.json` por meio do Volta.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
pnpm build
pnpm start
```

## Alterar produtos e preços

Edite `src/data/menu.ts`. O conteúdo da página é renderizado a partir desse arquivo.

O logo oficial está em `public/assets/logo-espetinho-da-dede.png`.
