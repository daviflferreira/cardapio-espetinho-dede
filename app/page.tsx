import Image from "next/image";
import { jantinha, menuSections } from "@/src/data/menu";

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function MenuRows({
  items,
}: {
  items: (typeof menuSections)[number]["items"];
}) {
  return (
    <ul className="menu-list">
      {items.map((item) => (
        <li
          className={
            item.featured ? "menu-row menu-row--featured" : "menu-row"
          }
          key={item.name}
        >
          <span className="menu-row__name">{item.name}</span>
          <span className="menu-row__dots" aria-hidden="true" />
          <strong className="menu-row__price">
            {priceFormatter.format(item.price)}
          </strong>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const sectionsBeforeJantinha = menuSections.slice(0, 3);
  const sectionsAfterJantinha = menuSections.slice(3);

  return (
    <main className="menu-page">
      <header className="menu-header">
        <div className="menu-logo-frame">
          <Image
            className="menu-logo"
            src="/assets/logo-espetinho-da-dede.png"
            alt="Espetinho da Dedé"
            width={1280}
            height={1280}
            priority
            unoptimized
          />
        </div>
        <p className="menu-kicker">Sabor na brasa!</p>
        <h1 className="menu-title">Cardápio</h1>
      </header>

      <div className="menu-content">
        {sectionsBeforeJantinha.map((section) => (
          <section className="menu-section" key={section.title}>
            <div className="menu-section__heading">
              <h2 className="menu-section__title">{section.title}</h2>
            </div>
            {section.note ? (
              <p className="menu-section__note">{section.note}</p>
            ) : null}
            <MenuRows items={section.items} />
          </section>
        ))}

        <section className="jantinha">
          <div className="jantinha__heading">
            <h2 className="jantinha__title">Jantinha</h2>
            <strong className="jantinha__price">
              {priceFormatter.format(jantinha.price)}
            </strong>
          </div>
          <p className="jantinha__intro">Escolha uma opção de base.</p>

          <div className="jantinha__options">
            {jantinha.options.map((option) => (
              <section className="jantinha-option" key={option.title}>
                <h3 className="jantinha-option__title">{option.title}</h3>
                <ul className="jantinha-option__items">
                  {option.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        {sectionsAfterJantinha.map((section) => (
          <section className="menu-section" key={section.title}>
            <div className="menu-section__heading">
              <h2 className="menu-section__title">{section.title}</h2>
            </div>
            {section.note ? (
              <p className="menu-section__note">{section.note}</p>
            ) : null}
            <MenuRows items={section.items} />
          </section>
        ))}
      </div>

      <footer className="menu-footer">
        <p>Espetinho da Dedé</p>
        <p>Sabor na brasa!</p>
        <p className="menu-footer__credit">
          Desenvolvido por <span>Davi Baliza</span>
        </p>
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Cardápio desenvolvido por Davi Ferreira Lacerda Baliza -->",
          }}
        />
      </footer>
    </main>
  );
}
