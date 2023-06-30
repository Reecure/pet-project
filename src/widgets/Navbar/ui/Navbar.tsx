import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { Button } from 'shared';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { logout } from 'enteties/User/model/slice/userSlice';
import { LoginForm } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const selectIsLogged = useAppSelector(userDataSelector);
    const dispatch = useAppDispatch();

    const loginModalOpenHandler = useCallback(
        () => {
            setLoginModalOpen(!loginModalOpen);
        },
        [loginModalOpen],
    );

    const LogountHandler = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <nav data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.authButtons}>
                <div>
                    {
                        selectIsLogged === undefined
                            ? <Button onClick={loginModalOpenHandler}>{t('Login')}</Button>
                            : <Button onClick={LogountHandler}>{t('Logout')}</Button>
                    }
                </div>
                <LoginForm isOpen={loginModalOpen} setIsOpen={loginModalOpenHandler} />
            </div>
        </nav>
    );
});

export default Navbar;
