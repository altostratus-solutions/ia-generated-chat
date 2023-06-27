import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ExamplesList from "./QuestionsList";
import { Question } from "../../schemas";

const meta: Meta<typeof ExamplesList> = {
  title: "Components/Examples",
  component: ExamplesList,
};

type Story = StoryObj<typeof meta>;

const ExamplesListDefault = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      inputText: "Hello",
      outputText: "Hi, how are you?",
    },
  ]);
  return (
    <>
      <ExamplesList questions={questions} onDelete={() => setQuestions([])} />
    </>
  );
};

export const Base: Story = {
  render: () => <ExamplesListDefault />,
};

export default meta;
