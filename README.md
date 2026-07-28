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

## Publicar na Vercel

1. Envie este projeto para um repositório no GitHub.
2. Na Vercel, selecione **Add New → Project**.
3. Importe o repositório.
4. Confirme o preset **Next.js** e publique.

Não são necessárias variáveis de ambiente.
