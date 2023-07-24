import {
    FC, memo, useCallback, useEffect, useState, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from 'enteties/User/model/selectors/isLoggedSelector';
import { Button } from '@/shared/ui/Button';
import { SidebarLinks } from '../../model/item';
import SidebarItem from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [open, isOpen] = useState(true);

    const links = useMemo(() => SidebarLinks.map((link) => (
        <SidebarItem key={link.to} link={link} open={open} />
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
                    {open ? '<' : '>'}
                </Button>
                <div className={cls.switchersWrapper}>
                    <LangSwitcher />
                    <ThemeSwitcher className={cls.themeSwitcher} />
                </div>
            </div>
        </div>
    );
};

export default memo(Sidebar);
