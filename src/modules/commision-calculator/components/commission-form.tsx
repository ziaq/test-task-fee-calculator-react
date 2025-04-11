import '../styles/commission-form.css';
import { useUserContext } from '@/modules/user-context';
import { useEffect, useState } from 'react';
import { useCalculateCommission } from '../hooks/use-calculate-commission';
import { calculateCommissionSchema } from '../dto/calculate-commission.schema';
import { useDebounce } from '@/shared/hooks/use-debounce';

import { CalculatorOptionInfo } from './calculator-option-info';
import { CalculatorIncludeCheckbox } from './calculator-include-checkbox';
import { CalculatorPriceInput } from './calculator-price-input';
import { CalculatorResults } from './calculator-results';

export const CommissionForm = () => {
  const { userId } = useUserContext();
  const [price, setPrice] = useState('');
  const [includeFee, setIncludeFee] = useState(false);

  const debouncedPrice = useDebounce(price);

  const {
    mutate: calculateCommission,
    data: calculationResult,
    isPending,
    isError,
  } = useCalculateCommission();

  useEffect(() => {
    if (!debouncedPrice) return;

    const parsed = calculateCommissionSchema.safeParse({
      price: Number(debouncedPrice),
      includeFee,
      userId,
    });

    if (parsed.success) {
      calculateCommission(parsed.data);
    }
  }, [debouncedPrice, includeFee, userId]);

  return (
    <div className="commission-form">
      <div className="commission-form__block">
        <CalculatorOptionInfo
          title="Включить комиссию в стоимость билета"
          description="Мы увеличим стоимость билета на размер комиссии и округлим её до целого, на ваш счёт после вычета комиссии поступит ровно та сумма, которую вы укажете в качестве цены."
        />
        <CalculatorIncludeCheckbox
          checked={includeFee}
          setIncludeFee={setIncludeFee}
        />
      </div>

      <div className="commission-form__block">
        <CalculatorOptionInfo
          title="Калькулятор комиссии"
          description="Введите цену билета и калькулятор покажет, сколько заплатит зритель, сколько заработаете вы и сколько составит комиссия сервиса."
        />

        <div className="commission-form__calculator-block">
          <CalculatorPriceInput
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            isLoading={isPending}
            isError={isError}
          />
          <CalculatorResults
            finalPrice={calculationResult?.finalPrice ?? 0}
            income={calculationResult?.income ?? 0}
            commission={calculationResult?.commission ?? 0}
          />
        </div>
      </div>
    </div>
  );
};
