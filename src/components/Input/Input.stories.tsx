import type { Meta,StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

type Story = StoryObj<typeof meta>;

export const Base:Story = {
  args: {
    label: 'Input Label',
    name: 'inputName',
    placeholder: 'Enter a value',
    disabled: false,
  },
}

export const Invalid:Story = {
  args: {
    label: 'Input Label',
    name: 'inputName',
    placeholder: 'Enter a value',
    disabled: false,
    isValid: false,
  },
}

export default meta;