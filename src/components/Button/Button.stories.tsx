import type { Meta,StoryObj } from '@storybook/react';
import { Button ,options} from './Button';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

type Story = StoryObj<typeof meta>;

export const Base:Story = {
  args: {
    label: 'button label',
    size: 'md',
  },
}

export const Disabled:Story = {
  args: {
    label: 'button label',
    size: 'md',
    disabled: true,
  },
}
export const Colors = () =>
  options.colors.map((color, index) => (
    <Button label='test' color={color} key={index}>
      Default
    </Button>
  ));
export const Sizes = () =>
  options.sizes.map((size, index) => (
    <Button label='test' size={size} key={index}>
      Default
    </Button>
  ));
export default meta;