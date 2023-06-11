import { Meta, StoryObj } from '@storybook/react';
import { StyleDecoration } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from 'shared';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAppLink: Story = {
    decorators: [StyleDecoration(Theme.LIGHT)],
    args: {
        children: 'text',
        to: '/',
    },
};

export const DarkAppLink: Story = {
    decorators: [StyleDecoration(Theme.DARK)],
    args: {
        children: 'text',
        to: '/',
    },
};
