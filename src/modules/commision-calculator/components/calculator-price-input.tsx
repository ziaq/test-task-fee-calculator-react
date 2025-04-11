interface CalculatorPriceInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isError: boolean;
}

export const CalculatorPriceInput = ({
  value,
  onChange,
  isLoading,
  isError,
}: CalculatorPriceInputProps) => {
  return (
    <div className="commission-form__input-wrapper">
      <input
        type="number"
        min="1"
        step="1"
        className="commission-form__input"
        value={value}
        onChange={onChange}
        placeholder="1000"
      />
      <span className="commission-form__input-currency">₽</span>
      {isLoading && <div><span className="spinner" /></div>}
      {isError && <span className="commission-form__input-error">Ошибка расчета</span>}
    </div>
  );
};
