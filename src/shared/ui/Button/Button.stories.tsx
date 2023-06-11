import type { Meta, StoryObj } from '@storybook/react';
import { ThemeButton } from 'shared/ui/Button/Button';
import { Button } from 'shared';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
    },
};

export const Clear: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.CLEAR,
    },
};

export const Rounded: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.ROUNDED,
    },
};
