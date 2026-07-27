import { businessConfig } from "@/src/config/business";
import { buildWhatsAppUrl } from "@/src/utils/whatsapp";

export function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppUrl(
    businessConfig.whatsappNumber,
    businessConfig.whatsappMessage,
  );

  if (!whatsappUrl) {
    return (
      <div className="order-cta">
        <div>
          <p className="eyebrow">Pedidos</p>
          <h2>Gostou? Faça seu pedido.</h2>
          <p>O atendimento pelo WhatsApp estará disponível em breve.</p>
        </div>
        <button
          className="whatsapp-button whatsapp-button--disabled"
          type="button"
          disabled
          aria-label="Fazer pedido pelo WhatsApp — telefone ainda não configurado"
        >
          <span aria-hidden="true">✦</span>
          Fazer pedido pelo WhatsApp
        </button>
      </div>
    );
  }

  return (
    <div className="order-cta">
      <div>
        <p className="eyebrow">Pedidos</p>
        <h2>Gostou? Faça seu pedido.</h2>
        <p>Fale com a gente e confirme a disponibilidade.</p>
      </div>
      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">✦</span>
        Fazer pedido pelo WhatsApp
      </a>
    </div>
  );
}
