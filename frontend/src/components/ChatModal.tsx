import { useState } from 'react';
import Chat from './Chat';
import axiosInstance from '../api/axios';

export type Message = {
  message: string;
  isBot: boolean;
};

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    // Implement your logic to send the message
    setMessage('');
    setMessages([...messages, { message, isBot: false }]);
    const body = {
      context: 'test',
      examples: [
        {
          inputText: 'test',
          outputText: 'test'
        }
      ],
      message:{
        text: message
      }
    }
    axiosInstance.post('/model/test', body).then((res) => {
      console.log(res.data);
      setMessages(prev => [...prev, { message: res.data.text, isBot: true }]);
    });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Chat Window</h2>
        <div className="chat-container">
          {/* Render your chat component here */}
          <Chat messages={messages} />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default ChatModal;