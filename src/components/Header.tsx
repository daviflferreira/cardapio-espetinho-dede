import Image from "next/image";
import { businessConfig } from "@/src/config/business";

export function Header() {
  return (
    <header className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__brand">
          <Image
            className="hero__logo"
            src="/assets/logo-espetinho-da-dede.png"
            alt="Logo do Espetinho da Dedé"
            width="1280"
            height="1280"
            priority
            unoptimized
          />
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Cardápio digital</p>
          <h1>{businessConfig.name}</h1>
          <p className="hero__slogan">{businessConfig.slogan}</p>
          <p className="hero__intro">
            Espetinhos, jantinhas e caldos preparados com muito sabor.
          </p>
          <a className="hero__shortcut" href="#cardapio">
            Ver o cardápio
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </header>
  );
}
