import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from '@/enteties/User';
import { AppLink } from '@/shared/ui/AppLink';
import { SidebarLink } from '../../../model/item';
import cls from './SidebarItem.module.scss';
import { sidebarIconRender } from '../../../helpers/sidebarIconRender';
import { useOuterWidth } from '@/shared/lib/hooks';

interface Props {
    link: SidebarLink
    open: boolean
    openSidebar: () => void
}

const SidebarItem: FC<Props> = ({ link, open, openSidebar }) => {
    const { t } = useTranslation();

    const outerWidth = useOuterWidth();
    const selectIsLogged = useAppSelector(isLoggedSelector);

    if (!selectIsLogged && link.authOnly) {
        return null;
    }

    return (
        <AppLink to={link.to} className={cls.link} onClick={outerWidth < 640 && openSidebar}>
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
