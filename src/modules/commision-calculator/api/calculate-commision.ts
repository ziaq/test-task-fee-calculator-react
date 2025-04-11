import { calculateCommissionSchema, CalculateCommissionDto } from '../dto/calculate-commission.schema';
import { calculationResultSchema, CalculationResult } from '../dto/calculation-result.schema';
import { env } from '@/shared/config'

export const calculateCommission = async (
  payload: CalculateCommissionDto
): Promise<CalculationResult> => {
  const validatedPayload = calculateCommissionSchema.parse(payload);

  const res = await fetch(`${env.VITE_API_URL}/commission/calculate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validatedPayload),
  });

  if (!res.ok) {
    throw new Error('Error in commission calculation');
  }

  const data = await res.json();
  return calculationResultSchema.parse(data);
};
