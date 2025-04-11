import { memo } from "react";

interface CalculatorIncludeCheckboxProps {
  checked: boolean;
  setIncludeFee: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CalculatorIncludeCheckbox = memo(({
  checked,
  setIncludeFee,
}: CalculatorIncludeCheckboxProps) => {
  return (
    <label className="commission-form__checkbox-label">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setIncludeFee(prev => !prev)}
        className="checkbox__input"
      />
      <span className="checkbox__custom" />
      Включить
    </label>
  );
});
