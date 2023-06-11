import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <ThemeProvider>
            <StoryComponent />
        </ThemeProvider>
    </BrowserRouter>

);
