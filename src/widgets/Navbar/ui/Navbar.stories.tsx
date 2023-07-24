import { Meta, StoryObj } from '@storybook/react';
import { StyleDecoration } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Navbar } from '@/widgets/Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNavbar: Story = {
    decorators: [StyleDecoration(Theme.LIGHT)],
};

export const DarkNavbar: Story = {
    decorators: [StyleDecoration(Theme.DARK)],
};
