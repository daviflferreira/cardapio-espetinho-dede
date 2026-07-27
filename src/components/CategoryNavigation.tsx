const categoryLinks = [
  { id: "espetinhos", label: "Espetinhos" },
  { id: "especiais", label: "Especiais" },
  { id: "jantinha", label: "Jantinha" },
  { id: "caldos", label: "Caldos" },
];

export function CategoryNavigation() {
  return (
    <nav className="category-nav" aria-label="Categorias do cardápio">
      <div className="category-nav__track">
        {categoryLinks.map((category) => (
          <a key={category.id} href={`#${category.id}`}>
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
