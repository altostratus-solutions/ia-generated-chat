import { useState } from 'react'
import { InputOutputTextPair } from '../models';
import axiosInstance, { TEST_MODEL_API_URL } from '../api/axios';
export type Message = {
  message: string;
  isBot: boolean;
};

type useChatParams = {
  chatbotName: string;
  modelContext: string;
  modelExamples: InputOutputTextPair[];
}

type TestModelRequestBody = {
  context: string;
  chatbotName: string;
  examples: InputOutputTextPair[];
  message: {
    text: string;
  }};
export default function useChat({chatbotName,modelContext,modelExamples}:useChatParams) {
  const [messages, setMessages] = useState<Message[]>([]);

  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    setMessage('');
    setMessages([...messages, { message, isBot: false }]);
    const reqBody:TestModelRequestBody = {
      context: modelContext,
      chatbotName: chatbotName,
      examples: modelExamples,
      message:{
        text: message
      }
    }
    axiosInstance.post(TEST_MODEL_API_URL, reqBody).then((res) => {
      setMessages(prev => [...prev, { message: res.data.text, isBot: true }]);
    }).catch((err) => {
      console.log(err);
    });
  };
  return {
    messages,
    message,
    setMessage,
    handleSendMessage,
  };
}
