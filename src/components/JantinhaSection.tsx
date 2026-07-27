import type { Jantinha } from "@/src/types/menu";
import { formatCurrency } from "@/src/utils/currency";

type JantinhaSectionProps = {
  jantinha: Jantinha;
};

export function JantinhaSection({ jantinha }: JantinhaSectionProps) {
  return (
    <section
      className="jantinha-section"
      id={jantinha.id}
      aria-labelledby="jantinha-title"
    >
      <div className="jantinha-section__heading">
        <div>
          <p className="eyebrow">Refeição completa</p>
          <h2 id="jantinha-title">{jantinha.name}</h2>
          <p>{jantinha.description}</p>
        </div>
        <strong>{formatCurrency(jantinha.price)}</strong>
      </div>

      <div className="jantinha-options">
        {jantinha.options.map((option) => (
          <article className="jantinha-option" key={option.id}>
            <h3>{option.name}</h3>
            <ul>
              {option.items.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="jantinha-section__note">
        Cada opção é uma composição diferente. Escolha apenas uma delas.
      </p>
    </section>
  );
}
