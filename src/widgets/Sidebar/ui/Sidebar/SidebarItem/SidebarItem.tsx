import {useTranslation} from 'react-i18next';
import {FC, memo, useEffect, useState} from 'react';
import {classNames} from '@/shared/lib/classNames';
import {useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {isLoggedSelector} from '@/enteties/User';
import {AppLink} from '@/shared/ui/AppLink';
import {SidebarLink} from '../../../model/item';
import cls from './SidebarItem.module.scss';
import {sidebarIconRender} from '../../../helpers/sidebarIconRender';

interface Props {
    link: SidebarLink
    open: boolean
    openSidebar: () => void
}

const SidebarItem: FC<Props> = ({link, open, openSidebar}) => {
    const {t} = useTranslation();
    const [windowWidth, setWindowWidth] = useState(0)

    const selectIsLogged = useAppSelector(isLoggedSelector);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.outerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    if (!selectIsLogged && link.authOnly) {
        return null;
    }

    return (
        <AppLink to={link.to} className={cls.link} onClick={windowWidth < 640 && openSidebar}>
            <span className={cls.linkIcon}>{sidebarIconRender(link.icon)}</span>
            <span
                className={classNames(`${!open ? `${cls.linkTextWhenClose}` : ''}`, {}, [])}
            >
                {t(link.text)}
            </span>
        </AppLink>
    );
};

export default memo(SidebarItem);
