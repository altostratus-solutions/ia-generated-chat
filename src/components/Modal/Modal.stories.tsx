import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useState } from "react";
import Chat from "../Chat/Chat";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

type Story = StoryObj<typeof meta>;

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Trigger Modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>Modal Example</div>
        </Modal>
      )}
    </>
  );
};

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Trigger Modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Test your Bot</h2>
          <Chat
            chatbotName={"My Chatbot"}
            modelContext={"You are an astronaut"}
            modelExamples={[
              {
                id: "1",
                inputText: "Hello",
                outputText: "Hi, how are you?",
              },
            ]}
          />
        </Modal>
      )}
    </>
  );
};

export const Base: Story = {
  render: () => <ModalExample />,
};

export const ModalWithChat: Story = {
  render: () => <ChatModal />,
};

export default meta;
