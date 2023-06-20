import type { Meta, StoryObj } from "@storybook/react";
import Alert, { types } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  args: {
    type: "success",
    message: "This is a success alert — check it out!",
    duration: 3000,
  },
  argTypes: {
    type: {
      description: "type of the alert",
      table: {
        type: {
          summary: types.map((type) => `'${type}'`).join(" | "),
        },
      },
      control: {
        type: "select",
        options: types,
      },
    },
    message: {
      description: "message of the alert",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
    duration: {
      description: "duration of the alert",
      table: {
        type: {
          summary: "number",
        },
      },
      control: {
        type: "number",
      },
    },
  },
};

type Story = StoryObj<typeof meta>;

export const Types = () =>
<div style={
  {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  }
}>
{

types.map((type, index) => (
  <Alert
    message="test message"
    type={type}
    key={index}
    onClose={() => console.log("close")}
  />
))
}

</div>

  export default meta;