import { z } from 'zod';

export const calculateCommissionSchema = z.object({
  price: z.number().min(0),
  includeFee: z.boolean(),
  userId: z.number().nullable(),
}).strict();

export type CalculateCommissionDto = z.infer<typeof calculateCommissionSchema>;
