import type { MenuItem as MenuItemType } from "@/src/types/menu";
import { formatCurrency } from "@/src/utils/currency";

type MenuItemProps = {
  item: MenuItemType;
};

export function MenuItem({ item }: MenuItemProps) {
  const itemClassName = [
    "menu-item",
    item.featured ? "menu-item--featured" : "",
    !item.available ? "menu-item--unavailable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={itemClassName}>
      <div className="menu-item__top">
        <h3>{item.name}</h3>
        <strong className="menu-item__price">{formatCurrency(item.price)}</strong>
      </div>

      {item.description ? <p>{item.description}</p> : null}

      <div className="menu-item__labels">
        {item.featured ? (
          <span className="featured-label">
            <span aria-hidden="true">★</span> Destaque da casa
          </span>
        ) : null}
        {!item.available ? (
          <span className="unavailable-label">Indisponível</span>
        ) : null}
      </div>
    </article>
  );
}
