import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ReduxProvider from 'app/providers/ReduxProvider/ui/ReduxProvider';

render(
    <ReduxProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root'),
);
