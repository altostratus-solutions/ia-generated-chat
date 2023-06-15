import type { Meta,StoryObj } from '@storybook/react';
import { Button } from './Button';


const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

type Story = StoryObj<typeof meta>;

export const Base:Story = {
  args: {
    label: 'button label',
    size: 'medium',
  },
}

export const Disabled:Story = {
  args: {
    label: 'button label',
    size: 'medium',
    disabled: true,
  },
}

export default meta;