import { BusinessInfo } from "@/src/components/BusinessInfo";
import { CategoryNavigation } from "@/src/components/CategoryNavigation";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { JantinhaSection } from "@/src/components/JantinhaSection";
import { MenuSection } from "@/src/components/MenuSection";
import { WhatsAppButton } from "@/src/components/WhatsAppButton";
import { jantinha, menuCategories } from "@/src/data/menu";

const mainCategories = menuCategories.filter(
  (category) => category.id !== "caldos",
);
const caldosCategory = menuCategories.find(
  (category) => category.id === "caldos",
);

export function MenuPage() {
  if (!caldosCategory) {
    throw new Error("A categoria de caldos não foi configurada.");
  }

  return (
    <div id="top">
      <Header />
      <CategoryNavigation />

      <main className="menu-shell" id="cardapio">
        <div className="menu-intro">
          <p className="eyebrow">Feito na brasa</p>
          <h2>Escolha o seu favorito</h2>
          <p>Preços claros, sabor de verdade e aquele capricho da Dedé.</p>
        </div>

        <div className="menu-grid">
          {mainCategories.map((category) => (
            <MenuSection category={category} key={category.id} />
          ))}
        </div>

        <JantinhaSection jantinha={jantinha} />
        <MenuSection category={caldosCategory} />
        <WhatsAppButton />
        <BusinessInfo />
      </main>

      <Footer />
    </div>
  );
}
