import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cardápio | Espetinho da Dedé",
  description: "Cardápio do Espetinho da Dedé.",
  icons: {
    icon: "/assets/logo-espetinho-da-dede.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#160e0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
