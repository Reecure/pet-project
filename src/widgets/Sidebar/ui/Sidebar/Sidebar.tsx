import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
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
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.open]: open }, [className])}
        >
            <Button data-testid="sidebar-toggle" onClick={openSideHandler}>
                {t('Toggle')}
            </Button>
            <div>
                <LangSwitcher />
                <ThemeSwitcher className={cls.themeSwitcher} />
            </div>
        </div>
    );
};

export default Sidebar;
