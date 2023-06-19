import { useEffect, useRef } from "react";
import classnames from "../../styles/Chat.module.css";
import classNames from "classnames";

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
          className={classNames(classnames.message, {
            [classnames.isBot]: message.isBot,
            [classnames.isUser]: !message.isBot,
          })}
        >
          {message.message}
        </div>
      ))}
    </div>
  );
};
export default ChatMessages;
