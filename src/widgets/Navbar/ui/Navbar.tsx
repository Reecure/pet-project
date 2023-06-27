import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { SelectIsLogged } from 'enteties/User/model/selectors/selectIsLogged';
import { logout } from 'enteties/User/model/slice/userSlice';
import { Button } from 'shared';
import LoginForm from 'features/AuthByUsername/LoginForm/ui/LoginForm';
import RegisterForm from 'features/AuthByUsername/RegisterForm/ui/RegisterForm';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    const isLogged = useAppSelector(SelectIsLogged);

    const dispatch = useAppDispatch();

    const loginModalOpenHandler = () => {
        setLoginModalOpen((prev) => !prev);
    };
    const registerModalOpenHandler = () => {
        setRegisterModalOpen((prev) => !prev);
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <nav data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.authButtons}>

                {
                    isLogged ? (
                        <div><Button onClick={logoutHandler}>{t('Logout')}</Button></div>
                    ) : (
                        <div>
                            <Button onClick={loginModalOpenHandler}>{t('Login')}</Button>
                            <Button onClick={registerModalOpenHandler}>{t('Register')}</Button>
                        </div>
                    )
                }
                <LoginForm isOpen={loginModalOpen} setIsOpen={loginModalOpenHandler} />
                <RegisterForm isOpen={registerModalOpen} setIsOpen={registerModalOpenHandler} />
            </div>
        </nav>
    );
};

export default Navbar;
