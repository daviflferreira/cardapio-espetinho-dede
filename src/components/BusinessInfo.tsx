import { businessConfig } from "@/src/config/business";

export function BusinessInfo() {
  const hasBusinessInfo = Boolean(
    businessConfig.address ||
      businessConfig.openingHours ||
      businessConfig.instagram,
  );

  if (!hasBusinessInfo) {
    return null;
  }

  return (
    <section className="business-info" aria-labelledby="business-info-title">
      <h2 id="business-info-title">Onde nos encontrar</h2>
      <dl>
        {businessConfig.address ? (
          <div>
            <dt>Endereço</dt>
            <dd>{businessConfig.address}</dd>
          </div>
        ) : null}
        {businessConfig.openingHours ? (
          <div>
            <dt>Horário</dt>
            <dd>{businessConfig.openingHours}</dd>
          </div>
        ) : null}
        {businessConfig.instagram ? (
          <div>
            <dt>Instagram</dt>
            <dd>{businessConfig.instagram}</dd>
          </div>
        ) : null}
      </dl>
    </section>
  );
}
