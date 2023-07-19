import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ReduxProvider from 'app/providers/ReduxProvider/ui/ReduxProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ReduxProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </ReduxProvider>,
);
