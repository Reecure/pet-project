import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { AiOutlineHome } from 'react-icons/ai';
import { BsListStars, BsFillPersonLinesFill } from 'react-icons/bs';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileSelector } from 'enteties/Profile/selectors/profileSelector';
import { isLoggedSelector } from 'enteties/User/model/selectors/isLoggedSelector';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [open, isOpen] = useState(true);
    const { t } = useTranslation();

    const selectIsLogged = useAppSelector(isLoggedSelector);

    const openSideHandler = useCallback(() => {
        isOpen(!open);
    }, [open]);

    useEffect(() => {}, [selectIsLogged]);

    return (

        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.open]: open }, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.MAIN} className={cls.link}>
                    <span className={cls.linkIcon}><AiOutlineHome /></span>
                    <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>
                        {t('Main Page')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.ABOUT} className={cls.link}>
                    <span className={cls.linkIcon}><BsListStars /></span>
                    <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>{t('About')}</span>
                </AppLink>
                {
                    selectIsLogged && (
                        <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.PROFILE} className={cls.link}>
                            <span className={cls.linkIcon}><BsFillPersonLinesFill /></span>
                            <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>{t('Profile')}</span>
                        </AppLink>
                    )
                }

            </div>
            <div>
                <Button data-testid="sidebar-toggle" className={cls.ToggleButton} onClick={openSideHandler}>
                    {'>'}
                </Button>
                <div>
                    <LangSwitcher />
                    <ThemeSwitcher className={cls.themeSwitcher} />
                </div>
            </div>
        </div>
    );
});

export default Sidebar;
