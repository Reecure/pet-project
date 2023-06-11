import { Story } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ContextDecorator = (StoryComponent: Story) => (
    <ThemeProvider>
        <StoryComponent />
    </ThemeProvider>
);
