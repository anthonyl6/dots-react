import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from "../components/CheckBox";

const meta = {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBoxStory: Story = {
  args: {
    type: "checkbox",
    variant: 'contained',
    accent: 'primary',
    disabled: false,
    href: undefined,
  },
};