export type MenuItem = {
  name: string;
  price: number;
  description?: string;
  featured?: boolean;
};

export type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Hambúrgueres artesanais",
    items: [
      {
        name: "Hambúrguer de carne",
        price: 24.99,
        description:
          "Carne 150 g, cheddar, bacon, alface, tomate e maionese verde",
      },
      {
        name: "Hambúrguer de frango",
        price: 24.99,
        description:
          "Frango 150 g, cheddar, bacon, alface, tomate e maionese verde",
      },
      {
        name: "Hambúrguer de costela",
        price: 24.99,
        description:
          "Costela 150 g, cheddar, bacon, alface, tomate e maionese verde",
      },
    ],
  },
  {
    title: "Porções",
    items: [{ name: "Batata frita 300 g", price: 19.99 }],
  },
  {
    title: "Espetinhos",
    items: [
      { name: "Frango", price: 10 },
      { name: "Carne", price: 10 },
      { name: "Asinha", price: 10 },
      { name: "Linguiça", price: 10 },
      { name: "Coração", price: 10 },
    ],
  },
  {
    title: "Mais opções",
    items: [
      { name: "Medalhão de frango", price: 10 },
      { name: "Costelinha suína", price: 10 },
      { name: "Queijo coalho", price: 10 },
      { name: "Queijo provolone", price: 10 },
      { name: "Pão de alho", price: 8.99 },
    ],
  },
  {
    title: "Espetinhos especiais",
    items: [
      { name: "Carneiro", price: 13 },
      { name: "Chuleta", price: 13 },
      { name: "Picanha grill", price: 19.99, featured: true },
    ],
  },
  {
    title: "Adicional",
    items: [{ name: "Paçoca adicional", price: 5 }],
  },
  {
    title: "Caldos",
    note: "Caldos de 300 ml.",
    items: [
      { name: "Frango", price: 12 },
      { name: "Vaca atolada", price: 12 },
      { name: "Mocotó", price: 12 },
      { name: "Abóbora", price: 12 },
    ],
  },
];

export const jantinha = {
  price: 20,
  options: [
    {
      title: "Opção 1",
      items: [
        "Arroz branco",
        "Feijão tropeiro",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
    {
      title: "Opção 2",
      items: [
        "Baião de dois",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
    {
      title: "Opção 3",
      items: [
        "Arroz carreteiro",
        "Mandioca",
        "Vinagrete",
        "Paçoca de carne seca",
      ],
    },
  ],
};
