import { useEffect, useRef } from 'react';
import { Message } from './ChatModal';

const Chat = ({ messages }:{messages:Message[]
}) => {
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const scrollToLastMessage = () => {
    if (scrollViewRef.current) {
      const lastMessage = scrollViewRef.current.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="chat" ref={scrollViewRef}>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isBot ? 'isBot' : 'isUser'}`}>
          {message.message}
        </div>
      ))}
    </div>
  );
};
export default Chat;