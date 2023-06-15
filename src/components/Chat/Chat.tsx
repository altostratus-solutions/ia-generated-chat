import React from 'react'
import ChatMessages from './ChatMessages'
import Input from '../Input/Input'
import { Button } from '../Button/Button'
import useChat from '../../hooks/useChat';
import { InputOutputTextPair } from '../../models';
type ChatProps = {
  chatbotName: string;
  modelContext: string;
  modelExamples: InputOutputTextPair[];
};
export default function Chat({
  chatbotName,
  modelContext,
  modelExamples,
}:ChatProps) {
  const { messages, handleSendMessage, message, setMessage, isLoading } =
    useChat({
      chatbotName,
      modelContext,
      modelExamples,
    });
  return (
    <>
    <div className="chat-container">
          <ChatMessages messages={messages} />
        </div>
        <div className="input-container">
          <Input
            className="chat-input"
            type="text"
            placeholder="Type your message..."
            value={message}
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            disabled={isLoading}
            onClick={handleSendMessage}
            label="Send"
          />
        </div>
    </>
  )
}
