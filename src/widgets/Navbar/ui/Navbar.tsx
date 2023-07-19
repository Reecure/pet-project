import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { logout } from 'enteties/User/model/slice/userSlice';
import { LoginForm } from 'features/AuthByUsername';
import { Button } from 'shared/ui/Button';
import cls from './Navbar.module.scss';
import UserDropdownProfile from './UserDropdownProfile/UserDropdownProfile';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const selectIsLogged = useAppSelector(userDataSelector);

    const loginModalOpenHandler = useCallback(() => {
        setLoginModalOpen(!loginModalOpen);
    }, [loginModalOpen]);

    return (
        <nav data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <div>{selectIsLogged !== undefined && <UserDropdownProfile user={selectIsLogged} />}</div>
            <div className={cls.authButtons}>
                <div>{selectIsLogged === undefined && <Button onClick={loginModalOpenHandler}>{t('Login')}</Button>}</div>
                <LoginForm isOpen={loginModalOpen} setIsOpen={loginModalOpenHandler} />
            </div>
        </nav>
    );
};

export default memo(Navbar);
