import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ExamplesList from "./ExamplesList";
import { InputOutputTextPair } from "../../models";

const meta: Meta<typeof ExamplesList> = {
  title: "Components/Examples",
  component: ExamplesList,
};

type Story = StoryObj<typeof meta>;

const ExamplesListDefault = () => {
  const [examples, setExamples] = useState<InputOutputTextPair[]>([
    {
      id: "1",
      inputText: "Hello",
      outputText: "Hi, how are you?",
    },
  ]);
  return (
    <>
      <ExamplesList modelExamples={examples} onDelete={() => setExamples([])} />
    </>
  );
};

export const Base: Story = {
  render: () => <ExamplesListDefault />,
};

export default meta;
