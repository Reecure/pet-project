import {
    FC, memo, useEffect, useMemo,
} from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { classNames } from '@/shared/lib/classNames';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from '@/enteties/User';
import { Button } from '@/shared/ui/Button';
import { SidebarLinks } from '../../model/item';
import SidebarItem from './SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { useOuterWidth } from '@/shared/lib/hooks';

interface SidebarProps {
    sidebarIsOpen: boolean
    openSidebar: () => void;
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className, openSidebar, sidebarIsOpen }) => {
    const links = useMemo(() => SidebarLinks.map((link) => (
        <SidebarItem key={link.to} link={link} open={sidebarIsOpen} openSidebar={openSidebar} />
    )), [sidebarIsOpen]);

    const outerWidth = useOuterWidth();
    const selectIsLogged = useAppSelector(isLoggedSelector);

    useEffect(() => {

    }, [selectIsLogged]);

    return (
        <div className={cls.sidebarWrapper}>
            <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.open]: sidebarIsOpen }, [className])}>
                <div className={cls.links}>
                    {
                        links
                    }
                </div>
                <div>
                    <Button data-testid="sidebar-toggle" className={cls.ToggleButton} onClick={openSidebar}>
                        {sidebarIsOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
                    </Button>
                    <div className={cls.switchersWrapper}>
                        <LangSwitcher />
                    </div>
                </div>
            </div>
            {
                sidebarIsOpen && outerWidth < 640 && (
                    <div className={cls.overlay} onClick={openSidebar} />
                )
            }

        </div>
    );
};

export default memo(Sidebar);
