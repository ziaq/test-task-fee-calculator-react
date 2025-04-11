import { memo } from "react";

interface CalculatorResultsProps {
  finalPrice: number;
  income: number;
  commission: number;
}

export const CalculatorResults = memo(({
  finalPrice,
  income,
  commission,
}: CalculatorResultsProps) => {
  return (
    <div className="commission-form__results">
      <p className="commission-form__result-row">
        <span>Стоимость для зрителя</span>
        <strong>{finalPrice} ₽</strong>
      </p>
      <p className="commission-form__result-row">
        <span>Ваш доход</span>
        <strong>{income.toFixed(2)} ₽</strong>
      </p>
      <p className="commission-form__result-row">
        <span>Комиссия</span>
        <strong>{commission.toFixed(2)} ₽</strong>
      </p>
    </div>
  );
});
