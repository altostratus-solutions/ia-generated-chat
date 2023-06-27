import { z } from "zod";

export const questionSchema = z.object({
  inputText: z.string().min(1).max(100),
  outputText: z.string().min(1).max(100),
  id: z.string(),
});
export const questionsFormSchema = questionSchema.omit({ id: true });

export type Question = z.infer<typeof questionSchema>;
export type QuestionsForm = z.infer<typeof questionsFormSchema>;
