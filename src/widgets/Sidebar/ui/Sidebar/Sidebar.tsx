import {
    FC, memo, useCallback, useEffect, useState, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from 'enteties/User/model/selectors/isLoggedSelector';
import { SidebarLinks } from '../../model/item';
import SidebarItem from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [open, isOpen] = useState(true);
    const { t } = useTranslation();

    const links = useMemo(() => SidebarLinks.map((link) => (
        <SidebarItem link={link} open={open} />
    )), [open]);

    const selectIsLogged = useAppSelector(isLoggedSelector);

    const openSideHandler = useCallback(() => {
        isOpen(!open);
    }, [open]);

    useEffect(() => {}, [selectIsLogged]);

    return (

        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.open]: open }, [className])}>
            <div className={cls.links}>
                {
                    links
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
