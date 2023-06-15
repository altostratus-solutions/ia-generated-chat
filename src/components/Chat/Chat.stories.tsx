import type { Meta,StoryObj } from '@storybook/react';
import Chat from './Chat';


const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
}

type Story = StoryObj<typeof meta>;

export const Base:Story = {
  render: () => <Chat chatbotName={"My Chatbot"} modelContext={"You are an astronaut"} modelExamples={[{id: "1", inputText: "Hello", outputText: "Hi, how are you?"}]} />,
}

export default meta;