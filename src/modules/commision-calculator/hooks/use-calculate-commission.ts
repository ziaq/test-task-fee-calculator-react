import { useMutation } from '@tanstack/react-query';

import { calculateCommission } from '../api/calculate-commision';
import { 
  CalculateCommissionDto, 
  calculateCommissionSchema, 
} from '../dto/calculate-commission.schema';

export const useCalculateCommission = () => {
  return useMutation({
    mutationFn: async (dto: CalculateCommissionDto) => {
      const validatedResponse = calculateCommissionSchema.parse(dto);
      return calculateCommission(validatedResponse);
    },
  });
};
