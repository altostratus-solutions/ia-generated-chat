import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";
import { options } from "../../constants";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args}>Default</Card>;

export const Default = Template.bind({});

export const Dragable = Template.bind({});
Dragable.args = {
  isDragable: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Colors = () =>
  options.colors.map((color, index) => (
    <Card color={color} key={index}>
      Default
    </Card>
  ));
export const Sizes = () =>
  options.sizes.map((size, index) => (
    <Card size={size} key={index}>
      Default
    </Card>
  ));
