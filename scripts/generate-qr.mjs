import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import QRCode from "qrcode";

function getPublicMenuUrl() {
  const configuredUrl = process.env.VITE_PUBLIC_MENU_URL?.trim();

  if (!configuredUrl) {
    throw new Error(
      "VITE_PUBLIC_MENU_URL não está configurada. Informe a URL pública do cardápio antes de gerar o QR Code.",
    );
  }

  let menuUrl;
  try {
    menuUrl = new URL(configuredUrl);
  } catch {
    throw new Error("VITE_PUBLIC_MENU_URL precisa ser uma URL válida.");
  }

  if (!["http:", "https:"].includes(menuUrl.protocol)) {
    throw new Error("A URL do cardápio deve usar HTTP ou HTTPS.");
  }

  const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
  if (localHosts.has(menuUrl.hostname.toLowerCase())) {
    throw new Error("O QR Code final não pode apontar para localhost.");
  }

  return menuUrl.toString();
}

const publicMenuUrl = getPublicMenuUrl();
const outputPath = resolve("public", "qr-cardapio.png");

await mkdir(dirname(outputPath), { recursive: true });
await QRCode.toFile(outputPath, publicMenuUrl, {
  type: "png",
  errorCorrectionLevel: "H",
  margin: 4,
  width: 1024,
  color: {
    dark: "#17100D",
    light: "#FFF8E8",
  },
});

console.log(`QR Code gerado em ${outputPath}`);
console.log(`URL utilizada: ${publicMenuUrl}`);
