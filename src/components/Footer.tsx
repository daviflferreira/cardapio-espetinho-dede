import Image from "next/image";
import { businessConfig } from "@/src/config/business";

export function Footer() {
  return (
    <footer className="footer">
      <Image
        src="/assets/logo-espetinho-da-dede.png"
        alt=""
        width="1280"
        height="1280"
        unoptimized
      />
      <div>
        <strong>{businessConfig.name}</strong>
        <p>{businessConfig.slogan}</p>
      </div>
      <a href="#top">Voltar ao topo ↑</a>
    </footer>
  );
}
