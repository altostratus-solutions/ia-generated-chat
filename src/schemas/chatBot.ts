import { z } from "zod";
import { questionSchema } from "./question";


export const chatBotDocSchema = z.object({
  chatbotName: z.string().min(1).max(50),
  modelContext: z.string().min(1).max(255),
  modelExamples: z.array(questionSchema),
  id: z.string(),
});

export const chatBotDataSchema = chatBotDocSchema.omit({
  id: true,
});

export const chatBotFormSchema = chatBotDataSchema.omit({
  modelExamples: true,
  id: true,
});

export type ChatBotDoc = z.infer<typeof chatBotDocSchema>;
export type ChatBotForm = z.infer<typeof chatBotFormSchema>;
export type ChatBotData = z.infer<typeof chatBotDataSchema>;
