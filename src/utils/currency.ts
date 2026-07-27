const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatCurrency(value: number): string {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`Não foi possível formatar o preço: ${value}`);
  }

  return currencyFormatter.format(value);
}
