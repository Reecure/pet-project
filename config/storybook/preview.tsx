import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecoration } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ContextDecorator } from '../../src/shared/config/storybook/ContextDecorator/ContextDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    decorators: [
        RouterDecorator,
        ContextDecorator,
        StyleDecoration(Theme.LIGHT),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
