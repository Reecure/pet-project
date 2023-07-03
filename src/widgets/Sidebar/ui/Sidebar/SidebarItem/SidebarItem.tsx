import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from 'enteties/User/model/selectors/isLoggedSelector';
import { AppLink } from 'shared';
import { SidebarLink } from 'widgets/Sidebar/model/item';
import { sidebarIconRender } from 'widgets/Sidebar/helpers/sidebarIconRender';

import cls from './SidebarItem.module.scss';

interface Props {
    link: SidebarLink
    open: boolean
}

const SidebarItem:FC<Props> = ({ link, open }) => {
    const { t } = useTranslation();
    const selectIsLogged = useAppSelector(isLoggedSelector);

    if (!selectIsLogged && link.authOnly) {
        return null;
    }

    return (
        <AppLink theme={link.theme} to={link.to} className={cls.link}>
            <span className={cls.linkIcon}>{sidebarIconRender(link.icon)}</span>
            <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>
                {link.text}
            </span>
        </AppLink>
    );
};

export default SidebarItem;
