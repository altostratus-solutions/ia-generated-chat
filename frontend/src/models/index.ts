export type InputOutputTextPair ={
  inputText: string;
  outputText: string;
  id: string;
}

export type ChatBotDoc = {
  id: string;
  chatbotName: string;
  modelContext: string;
  modelExamples: InputOutputTextPair[];
}

export type chatBotFormState = {
  chatbotName: string;
  modelContext: string;
  modelExamples: InputOutputTextPair[];
  currentExample: InputOutputTextPair;
};