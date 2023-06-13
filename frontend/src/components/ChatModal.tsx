import { useState } from 'react';
import Chat from './Chat';
import axiosInstance from '../api/axios';
import { InputOutputTextPair } from '../models';

export type Message = {
  message: string;
  isBot: boolean;
};

type ChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
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
  }
}
const ChatModal = ({ isOpen, onClose,chatbotName,modelContext,modelExamples }:ChatModalProps) => {
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
    axiosInstance.post('/model/test', reqBody).then((res) => {
      setMessages(prev => [...prev, { message: res.data.text, isBot: true }]);
    });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Test your Bot</h2>
        <div className="chat-container">
          <Chat messages={messages} />
        </div>
        <div className="input-container">
          <input
          className='chat-input'
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={(e)=>handleSendMessage(e)}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default ChatModal;