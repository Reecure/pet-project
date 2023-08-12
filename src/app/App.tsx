import {Suspense, useEffect, useState} from 'react';
import {useTheme} from '@/app/providers/ThemeProvider';
import {classNames} from '@/shared/lib/classNames';
import {AppRouter} from '@/app/providers/router';
import {Navbar} from '@/widgets/Navbar';
import {Sidebar} from '@/widgets/Sidebar';
import './styles/index.scss';
import {initAuthData} from '@/enteties/User';
import {useAppDispatch} from './providers/ReduxProvider/config/hooks';

const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarOpenHandler = () => {
        setSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar openSideBar={sidebarOpenHandler}/>

                <div className={classNames('page-wrapper', {}, [])}>
                    <div>
                        <Sidebar sidebarIsOpen={sidebarOpen} openSidebar={sidebarOpenHandler}/>
                    </div>
                    <div className="page-component-wrapper">
                        <AppRouter/>
                    </div>

                </div>
            </Suspense>
        </div>
    );
};

export default App;
