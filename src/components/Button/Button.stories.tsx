import type { Meta, StoryObj } from "@storybook/react";
import { Button, options } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "button label",
    size: "md",
    color: "primary",
  },
  argTypes: {
    label: {
      description: "Text inside the button",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
      },
    },
    size: {
      description: "Size of the button",
      table: {
        type: {
          summary: options.sizes.map((size) => `'${size}'`).join(" | "),
        },
      },
      control: {
        type: "select",
        options: options.sizes,
      },
    },
    color: {
      description: "Color of the button",
      table: {
        type: {
          summary: options.colors.map((color) => `'${color}'`).join(" | "),
        },},
      control: {
        type: "select",
        options: options.colors,
      },
  },
}
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "button label",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "button label",
    size: "md",
    disabled: true,
  },
};
export const Colors = () =>
  options.colors.map((color, index) => (
    <Button label="test" color={color} key={index}>
      Default
    </Button>
  ));
export const Sizes = () =>
  options.sizes.map((size, index) => (
    <Button label="test" size={size} key={index}>
      Default
    </Button>
  ));
export default meta;
