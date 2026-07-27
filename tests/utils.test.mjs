import assert from "node:assert/strict";
import test from "node:test";
import { formatCurrency } from "../src/utils/currency.ts";
import { buildWhatsAppUrl } from "../src/utils/whatsapp.ts";

test("formata moeda em real brasileiro", () => {
  assert.equal(formatCurrency(19.99), "R$ 19,99");
  assert.equal(formatCurrency(10), "R$ 10,00");
});

test("cria o link do WhatsApp com a mensagem codificada", () => {
  const url = buildWhatsAppUrl("5562999999999", "Olá! Quero fazer um pedido.");

  assert.equal(
    url,
    "https://wa.me/5562999999999?text=Ol%C3%A1!%20Quero%20fazer%20um%20pedido.",
  );
});

test("não cria link sem telefone configurado ou com formato inválido", () => {
  assert.equal(buildWhatsAppUrl("", "Olá!"), null);
  assert.equal(buildWhatsAppUrl("+55 (62) 99999-9999", "Olá!"), null);
});
