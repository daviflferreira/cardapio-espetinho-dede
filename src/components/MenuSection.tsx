import { MenuItem } from "@/src/components/MenuItem";
import type { MenuCategory } from "@/src/types/menu";

type MenuSectionProps = {
  category: MenuCategory;
};

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section
      className={`menu-section menu-section--${category.id}`}
      id={category.id}
      aria-labelledby={`${category.id}-title`}
    >
      <div className="section-heading">
        <span className="section-heading__mark" aria-hidden="true" />
        <div>
          <h2 id={`${category.id}-title`}>{category.name}</h2>
          {category.description ? <p>{category.description}</p> : null}
        </div>
      </div>

      <div className="menu-list">
        {category.items.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
