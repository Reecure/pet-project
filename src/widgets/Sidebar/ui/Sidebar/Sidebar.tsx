import {FC, memo, useEffect, useMemo,} from 'react';
import {classNames} from '@/shared/lib/classNames';
import {ThemeSwitcher} from '@/widgets/ThemeSwitcher';
import {LangSwitcher} from '@/widgets/LangSwitcher';
import {useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {isLoggedSelector} from '@/enteties/User';
import {Button} from '@/shared/ui/Button';
import {SidebarLinks} from '../../model/item';
import SidebarItem from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    sidebarIsOpen: boolean
    openSidebar: () => void;
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({className, openSidebar, sidebarIsOpen}) => {
    const links = useMemo(() => SidebarLinks.map((link) => (
        <SidebarItem key={link.to} link={link} open={sidebarIsOpen} openSidebar={openSidebar}/>
    )), [sidebarIsOpen]);

    const selectIsLogged = useAppSelector(isLoggedSelector);

    useEffect(() => {

    }, [selectIsLogged]);

    return (
        <div className={cls.sidebarWrapper}>
            <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.open]: sidebarIsOpen}, [className])}>
                <div className={cls.links}>
                    {
                        links
                    }
                </div>
                <div>
                    <Button data-testid="sidebar-toggle" className={cls.ToggleButton} onClick={openSidebar}>
                        {sidebarIsOpen ? '<' : '>'}
                    </Button>
                    <div className={cls.switchersWrapper}>
                        <LangSwitcher/>
                        <ThemeSwitcher className={cls.themeSwitcher}/>
                    </div>
                </div>
            </div>
            {
                sidebarIsOpen && <div className={cls.overlay} onClick={openSidebar}>
                </div>
            }

        </div>
    );
};

export default memo(Sidebar);
