import { useEffect, useRef } from "react";
import classnames from "../../styles/Chat.module.css"

export type Message = {
  message: string;
  isBot: boolean;
};
const ChatMessages = ({ messages }: { messages: Message[] }) => {
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToLastMessage();
  }, [messages]);

  const scrollToLastMessage = () => {
    if (scrollViewRef.current) {
      const lastMessage = scrollViewRef.current.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className={classnames.chat} ref={scrollViewRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${classnames.message} ${message.isBot ? "isBot" : "isUser"}`}
        >
          {message.message}
        </div>
      ))}
    </div>
  );
};
export default ChatMessages;
