import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Button } from '@/shared/ui/Button';
import cls from './Navbar.module.scss';
import { userDataSelector } from '@/enteties/User';
import UserDropdownProfile from './UserDropdownProfile/UserDropdownProfile';
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
        <nav data-testid="navbar" className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={openSideBar} className={cls.sidebarButton}>Sidebar</Button>

            <div>
                <div>{selectIsLogged !== undefined && <UserDropdownProfile user={selectIsLogged} />}</div>
                <div className={cls.authButtons}>
                    <div>
                        {selectIsLogged === undefined
                            && <Button onClick={loginModalOpenHandler}>{t('Login')}</Button>}
                    </div>
                    <LoginForm isOpen={loginModalOpen} setIsOpen={loginModalOpenHandler} />
                </div>
            </div>
        </nav>
    );
};

export default memo(Navbar);
