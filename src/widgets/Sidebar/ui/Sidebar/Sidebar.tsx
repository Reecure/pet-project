import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { AiOutlineHome } from 'react-icons/ai';
import { BsListStars } from 'react-icons/bs';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, isOpen] = useState(true);
    const { t } = useTranslation();

    const openSideHandler = () => {
        isOpen((prev) => !prev);
    };

    return (

        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.open]: open }, [className])}>
            <div className={cls.links}>
                <AppLink to={AppRoutes.MAIN} className={cls.link}>
                    <span className={cls.linkIcon}><AiOutlineHome /></span>
                    <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>
                        {t('Main Page')}
                    </span>
                </AppLink>
                <AppLink to={AppRoutes.ABOUT} className={cls.link}>
                    <span className={cls.linkIcon}><BsListStars /></span>
                    <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>{t('About')}</span>
                </AppLink>
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
};

export default Sidebar;
