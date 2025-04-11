import { memo } from 'react';

interface CalculatorOptionInfoProps {
  title: string;
  description: string;
}

export const CalculatorOptionInfo = memo(({ title, description }: CalculatorOptionInfoProps) => {
  return (
    <div className="commission-form__option-info">
      <p className="commission-form__title">{title}</p>
      <p className="commission-form__description">{description}</p>
    </div>
  );
});
