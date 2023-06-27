import ChatMessages from './ChatMessages'
import Input from '../Input/Input'
import  Button  from '../Button/Button'
import useChat from '../../hooks/useChat';
import { Question } from '../../schemas';
import classnames from "../../styles/Chat.module.css"
type ChatProps = {
  chatbotName: string;
  modelContext: string;
  modelExamples: Question[];
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
    <div className={classnames['chat-container']}>
          <ChatMessages messages={messages} />
        </div>
        <div className={classnames['input-container']}>
          <Input
            className={classnames['chat-input']}
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
            size='md'
          />
        </div>
    </>
  )
}
