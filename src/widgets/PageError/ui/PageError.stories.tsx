import { Meta, StoryObj } from '@storybook/react';
import { StyleDecoration } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { PageError } from '@/widgets/PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPageError: Story = {
    decorators: [StyleDecoration(Theme.LIGHT)],
};

export const DarkPageError: Story = {
    decorators: [StyleDecoration(Theme.DARK)],
};
