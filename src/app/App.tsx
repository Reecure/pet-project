import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import './styles/index.scss';
import ReduxProvider from './providers/ReduxProvider/ui/ReduxProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <ReduxProvider>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Navbar />
                    <div className={classNames('page-wrapper', {}, [])}>
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Suspense>
            </div>
        </ReduxProvider>
    );
};

export default App;
