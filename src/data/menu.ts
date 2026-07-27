import type { Jantinha, MenuCategory, MenuItem } from "@/src/types/menu";

export const menuCategories: MenuCategory[] = [
  {
    id: "espetinhos",
    name: "Espetinhos",
    description: "Os clássicos da brasa, preparados na hora.",
    items: [
      { id: "frango", name: "Frango", price: 10, available: true },
      { id: "carne", name: "Carne", price: 10, available: true },
      { id: "asinha", name: "Asinha", price: 10, available: true },
      { id: "linguica", name: "Linguiça", price: 10, available: true },
      { id: "coracao", name: "Coração", price: 10, available: true },
    ],
  },
  {
    id: "mais-opcoes",
    name: "Mais opções",
    items: [
      {
        id: "medalhao-frango",
        name: "Medalhão de frango",
        price: 10,
        available: true,
      },
      {
        id: "costelinha-suina",
        name: "Costelinha suína",
        price: 10,
        available: true,
      },
    ],
  },
  {
    id: "especiais",
    name: "Espetinhos especiais",
    description: "Cortes selecionados para quem quer caprichar no pedido.",
    items: [
      { id: "carneiro", name: "Carneiro", price: 13, available: true },
      { id: "chuleta", name: "Chuleta", price: 13, available: true },
      {
        id: "picanha-grill",
        name: "Picanha grill",
        description: "Um corte especial, dourado na brasa.",
        price: 19.99,
        available: true,
        featured: true,
      },
    ],
  },
  {
    id: "adicional",
    name: "Adicional",
    items: [
      {
        id: "pacoca-adicional",
        name: "Paçoca adicional",
        price: 5,
        available: true,
      },
    ],
  },
  {
    id: "caldos",
    name: "Caldos",
    description: "Caldos de 300 ml.",
    items: [
      { id: "caldo-frango", name: "Frango", price: 12, available: true },
      {
        id: "caldo-vaca-atolada",
        name: "Vaca atolada",
        price: 12,
        available: true,
      },
      { id: "caldo-mocoto", name: "Mocotó", price: 12, available: true },
      { id: "caldo-abobora", name: "Abóbora", price: 12, available: true },
    ],
  },
];

export const jantinha: Jantinha = {
  id: "jantinha",
  name: "Jantinha",
  description: "Escolha uma opção de base.",
  price: 20,
  available: true,
  options: [
    {
      id: "jantinha-opcao-1",
      name: "Opção 1",
      items: [
        "Arroz branco",
        "Feijão tropeiro",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
    {
      id: "jantinha-opcao-2",
      name: "Opção 2",
      items: [
        "Baião de dois",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
    {
      id: "jantinha-opcao-3",
      name: "Opção 3",
      items: [
        "Arroz carreteiro",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
  ],
};

function validateItems(items: MenuItem[], ids: Set<string>) {
  for (const item of items) {
    if (ids.has(item.id)) {
      throw new Error(`ID de produto duplicado: ${item.id}`);
    }
    if (!Number.isFinite(item.price) || item.price < 0) {
      throw new Error(`Preço inválido para o produto: ${item.name}`);
    }
    ids.add(item.id);
  }
}

function validateMenuData() {
  const categoryIds = new Set<string>();
  const itemIds = new Set<string>();

  for (const category of menuCategories) {
    if (categoryIds.has(category.id)) {
      throw new Error(`ID de categoria duplicado: ${category.id}`);
    }
    categoryIds.add(category.id);
    validateItems(category.items, itemIds);
  }

  if (categoryIds.has(jantinha.id)) {
    throw new Error(`ID de categoria duplicado: ${jantinha.id}`);
  }
  if (!Number.isFinite(jantinha.price) || jantinha.price < 0) {
    throw new Error("Preço inválido para a Jantinha.");
  }
}

validateMenuData();
