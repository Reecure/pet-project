import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { GiHamburgerMenu } from 'react-icons/gi';
import { classNames } from '@/shared/lib/classNames';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './Navbar.module.scss';
import { userDataSelector } from '@/enteties/User';
import UserDropdownProfile from '@/widgets/Navbar/ui/UserDropdownProfile/UserDropdownProfile';
import { LoginForm } from '@/features/AuthByUsername';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

interface NavbarProps {
    openSideBar: () => void
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className, openSideBar }) => {
    const { t } = useTranslation();
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const selectIsLogged = useAppSelector(userDataSelector);

    const loginModalOpenHandler = useCallback(() => {
        setLoginModalOpen(!loginModalOpen);
    }, [loginModalOpen]);

    return (
        <>
            <nav data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR}
                    data-testid="sidebar-button"
                    onClick={openSideBar}
                    className={cls.sidebarButton}
                >
                    <GiHamburgerMenu />
                </Button>

                <div className={cls.rightSide}>
                    <ThemeSwitcher />
                    <div>{selectIsLogged !== undefined && <UserDropdownProfile user={selectIsLogged} />}</div>
                    <div className={cls.authButtons}>
                        <div>

                            {selectIsLogged === undefined
                                && <Button onClick={loginModalOpenHandler}>{t('Login')}</Button>}
                        </div>

                    </div>
                </div>
            </nav>
            <LoginForm data-testid="login-form" isOpen={loginModalOpen} setIsOpen={loginModalOpenHandler} />
        </>
    );
};

export default memo(Navbar);
