export type BusinessConfig = {
  name: string;
  slogan: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: string;
  openingHours: string;
  menuUrl: string;
  instagram: string;
};

export const businessConfig: BusinessConfig = {
  name: "Espetinho da Dedé",
  slogan: "Sabor na brasa!",
  whatsappNumber: "",
  whatsappMessage:
    "Olá! Vim pelo cardápio digital do Espetinho da Dedé e gostaria de fazer um pedido.",
  address: "",
  openingHours: "",
  menuUrl: process.env.VITE_PUBLIC_MENU_URL ?? "",
  instagram: "",
};
