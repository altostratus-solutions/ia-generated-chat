export type InputOutputTextPair ={
  inputText: string;
  outputText: string;
}

export type ChatBotDoc = {
  id: string;
  chatbotName: string;
  modelContent: string;
  modelExamples: InputOutputTextPair[];
}