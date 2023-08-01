import type { Meta, StoryObj } from '@storybook/react';

import Button, { ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ClearButton: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [],
};
export const OutlineRedButton: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE_RED,
    },
    decorators: [],
};
