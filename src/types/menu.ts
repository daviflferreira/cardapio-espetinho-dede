export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  available: boolean;
  featured?: boolean;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
};

export type JantinhaOption = {
  id: string;
  name: string;
  items: string[];
};

export type Jantinha = {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  options: JantinhaOption[];
};
