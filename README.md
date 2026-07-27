# Cardápio digital — Espetinho da Dedé

Cardápio responsivo e mobile-first para clientes que chegam por QR Code. O MVP apresenta os produtos, preços e opções de Jantinha, prepara o contato por WhatsApp e inclui um gerador de QR Code para a URL publicada.

## Tecnologias

- React 19 e TypeScript em modo `strict`
- Vinext sobre Vite, com rotas no padrão App Router
- CSS responsivo, sem biblioteca de componentes
- ESLint e testes com o test runner nativo do Node.js
- `qrcode` apenas para gerar o arquivo de impressão

Requisitos: Node.js 22.13 ou superior e pnpm 10.

## Instalação e execução

```bash
pnpm install
pnpm dev
```

Abra a URL indicada no terminal e acesse `/cardapio`. A rota `/` também renderiza o mesmo conteúdo.

## Validação e build

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

O comando de testes executa o build antes das verificações de conteúdo e das funções utilitárias.

## Como atualizar o cardápio

Todos os produtos, preços, disponibilidade e opções da Jantinha ficam em:

`src/data/menu.ts`

Altere os dados nesse arquivo — não escreva produtos ou preços diretamente nos componentes. Os preços são números e a interface usa `Intl.NumberFormat` para exibir reais brasileiros.

Os tipos usados pelo cardápio ficam em `src/types/menu.ts`.

## Configuração do estabelecimento e WhatsApp

Edite `src/config/business.ts` para preencher:

- `whatsappNumber`: telefone em formato internacional, somente números, por exemplo `55` + DDD + número;
- `address`: endereço;
- `openingHours`: horário de atendimento;
- `instagram`: perfil, caso seja informado;
- `whatsappMessage`: mensagem inicial do pedido.

Os valores não informados permanecem vazios. Enquanto `whatsappNumber` estiver vazio ou inválido, o botão de pedido será exibido desabilitado e nenhum link incorreto será criado.

## Logo e fotos

O logo oficial está em:

`public/assets/logo-espetinho-da-dede.png`

A versão atual tem fundo preto e foi integrada ao fundo escuro do layout. Para o melhor acabamento possível em outros fundos, prefira futuramente um PNG oficial com transparência.

Fotos opcionais de produtos podem ser colocadas em:

`public/assets/menu/`

O cardápio funciona normalmente sem essas fotos.

## URL pública e QR Code

Copie `.env.example` para `.env` e substitua o valor de exemplo pela URL publicada:

```dotenv
VITE_PUBLIC_MENU_URL=https://seu-dominio.com/cardapio
```

O endereço do exemplo não é um domínio real do estabelecimento. A URL final precisa usar HTTP ou HTTPS e não pode apontar para localhost.

Com a variável disponível no ambiente, gere o QR Code:

```bash
pnpm generate:qr
```

O arquivo será criado em `public/qr-cardapio.png`, com correção de erro alta e margem para impressão. Antes de imprimir, leia o arquivo com ao menos dois celulares e confirme que ambos abrem exatamente a rota `/cardapio` publicada.

No PowerShell, também é possível executar sem criar `.env`:

```powershell
$env:VITE_PUBLIC_MENU_URL="https://seu-dominio.com/cardapio"
pnpm generate:qr
```

## Publicação

1. Execute `pnpm typecheck`, `pnpm lint`, `pnpm test` e `pnpm build`.
2. Publique a saída usando a configuração de hospedagem do projeto.
3. Confirme que o acesso direto a `/cardapio` retorna a página sem erro.
4. Defina `VITE_PUBLIC_MENU_URL` com a URL real publicada.
5. Gere e teste `public/qr-cardapio.png`.

Não há banco de dados, autenticação, painel administrativo, pagamento ou backend neste MVP.
