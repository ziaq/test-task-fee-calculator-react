import { z } from 'zod';

export const calculationResultSchema = z.object({
  finalPrice: z.number(),
  income: z.number(),
  commission: z.number(),
}).strict();

export type CalculationResult = z.infer<typeof calculationResultSchema>;
