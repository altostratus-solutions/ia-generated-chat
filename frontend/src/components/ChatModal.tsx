import Chat from "./Chat";
import { InputOutputTextPair } from "../models";
import useChat from "../hooks/useChat";

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
};

const ChatModal = ({
  isOpen,
  onClose,
  chatbotName,
  modelContext,
  modelExamples,
}: ChatModalProps) => {
  const { messages, handleSendMessage, message, setMessage,isLoading } = useChat({
    chatbotName,
    modelContext,
    modelExamples,
  });

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Test your Bot</h2>
        <div className="chat-container">
          <Chat messages={messages} />
        </div>
        <div className="input-container">
          <input
            className="chat-input"
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button disabled={isLoading} onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default ChatModal;
