import { Message } from './ChatModal';

const Chat = ({ messages }:{messages:Message[]}) => {
  return (
    <div className="chat">
      {messages.map((message, index) => (
        <div key={index} className="message">
          {message.message}
        </div>
      ))}
    </div>
  );
};
export default Chat;