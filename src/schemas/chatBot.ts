import { z } from "zod";
import { questionSchema } from "./question";

export const ChatBotFormSchema = z.object({
  chatbotName: z.string().min(1).max(50),
  modelContext: z.string().min(1).max(255),
  modelExamples: z.array(questionSchema),
  currentExample: questionSchema,
});

export const chatBotDocSchema = z.object({
  chatbotName: z.string().min(1).max(50),
  modelContext: z.string().min(1).max(255),
  modelExamples: z.array(questionSchema),
  id: z.string(),
});

export const chatBotFromSchema = chatBotDocSchema.omit({ id: true });

export type ChatBotDoc = z.infer<typeof chatBotDocSchema>;
export type ChatBotForm = z.infer<typeof chatBotFromSchema>;
