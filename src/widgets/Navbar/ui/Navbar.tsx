import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Button } from '@/shared/ui/Button';
import cls from './Navbar.module.scss';
import { userDataSelector } from '@/enteties/User';
import UserDropdownProfile from '@/widgets/Navbar/ui/UserDropdownProfile/UserDropdownProfile';
import { LoginForm } from '@/features/AuthByUsername';

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
                <Button data-testid="sidebar-button" onClick={openSideBar} className={cls.sidebarButton}>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round" />
                            <path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round" />
                        </g>
                    </svg>
                </Button>

                <div>
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
