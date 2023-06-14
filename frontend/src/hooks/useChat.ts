import { useState } from "react";
import { InputOutputTextPair } from "../models";
import { sendMessage } from "../services/sendMessage";
export type Message = {
  message: string;
  isBot: boolean;
};

type useChatParams = {
  chatbotName: string;
  modelContext: string;
  modelExamples: InputOutputTextPair[];
};

export default function useChat({
  chatbotName,
  modelContext,
  modelExamples,
}: useChatParams) {
  const [messages, setMessages] = useState<Message[]>([]);

  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    setMessage("");
    setMessages([...messages, { message, isBot: false }]);
    const reqBody = {
      context: modelContext,
      chatbotName: chatbotName,
      examples: modelExamples,
      message: {
        text: message,
      },
    };
    sendMessage(reqBody).then((res) => {
      setMessages((prev) => [...prev, { message: res.text, isBot: true }]);
    });
  };
  return {
    messages,
    message,
    setMessage,
    handleSendMessage,
  };
}
