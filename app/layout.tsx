import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { businessConfig } from "@/src/config/business";
import "./globals.css";

const title = "Cardápio | Espetinho da Dedé";
const description =
  "Confira o cardápio do Espetinho da Dedé: espetinhos, jantinhas, caldos e muito sabor na brasa.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = forwardedHost ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol =
    forwardedProtocol ?? (host?.includes("localhost") ? "http" : "https");
  const baseUrl = host ? `${protocol}://${host}` : undefined;
  const socialImageUrl = baseUrl ? `${baseUrl}/og.png` : undefined;

  return {
    title,
    description,
    applicationName: businessConfig.name,
    icons: {
      icon: "/assets/logo-espetinho-da-dede.png",
      shortcut: "/assets/logo-espetinho-da-dede.png",
      apple: "/assets/logo-espetinho-da-dede.png",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: businessConfig.name,
      title,
      description,
      url: businessConfig.menuUrl || undefined,
      images: socialImageUrl
        ? [{ url: socialImageUrl, alt: `Cardápio digital do ${businessConfig.name}` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImageUrl ? [socialImageUrl] : undefined,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#17100d",
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
