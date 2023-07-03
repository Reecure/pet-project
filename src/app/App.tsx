import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { initAuthData } from 'enteties/User/model/slice/userSlice';
import ReduxProvider from './providers/ReduxProvider/ui/ReduxProvider';
import { useAppDispatch } from './providers/ReduxProvider/config/hooks';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />

                <div className={classNames('page-wrapper', {}, [])}>
                    <div>
                        <Sidebar />
                    </div>
                    <div className="page-component-wrapper">
                        <AppRouter />
                    </div>

                </div>
            </Suspense>
        </div>
    );
};

export default App;
