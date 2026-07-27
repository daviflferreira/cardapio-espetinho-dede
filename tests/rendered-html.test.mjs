import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/cardapio") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: {
        accept: "text/html",
        host: "localhost",
        "x-forwarded-proto": "http",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza o cardápio em /cardapio e na raiz", async () => {
  const [menuResponse, homeResponse] = await Promise.all([
    render("/cardapio"),
    render("/"),
  ]);

  assert.equal(menuResponse.status, 200);
  assert.equal(homeResponse.status, 200);
  assert.match(menuResponse.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await menuResponse.text();
  assert.match(html, /<html lang="pt-BR"/);
  assert.match(html, /<title>Cardápio \| Espetinho da Dedé<\/title>/);
  assert.match(html, /Espetinho da Dedé/);
  assert.match(html, /Fazer pedido pelo WhatsApp/);
});

test("renderiza os produtos, preços e categorias obrigatórios", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /Picanha grill/);
  assert.match(html, /19,99/);
  assert.match(html, /Paçoca adicional/);
  assert.match(html, /5,00/);
  assert.match(html, /Caldos de 300 ml\./);
  assert.match(html, /Vaca atolada/);
  assert.match(html, /Mocotó/);
  assert.match(html, /Abóbora/);
  assert.match(html, /Opção 1/);
  assert.match(html, /Opção 2/);
  assert.match(html, /Opção 3/);
  assert.match(html, /Jantinha/);
  assert.match(html, /20,00/);
});
