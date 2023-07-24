import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from '@/enteties/User/model/selectors/isLoggedSelector';
import { sidebarIconRender } from '@/widgets/Sidebar/helpers/sidebarIconRender';

import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import { AppLink } from '@/shared/ui/AppLink';
import { Links, SidebarLink } from '../../../model/item';
import cls from './SidebarItem.module.scss';

interface Props {
    link: SidebarLink
    open: boolean
}

const SidebarItem: FC<Props> = ({ link, open }) => {
    const { t } = useTranslation();

    const selectIsLogged = useAppSelector(isLoggedSelector);
    const currentUser = useAppSelector(userDataSelector);

    const helperProfileId = (text: Links) => {
        switch (text) {
        case Links.Profile:
            return `${link.to}/${currentUser.id}`;
        default:
            return link.to;
        }
    };

    if (!selectIsLogged && link.authOnly) {
        return null;
    }

    return (
        <AppLink theme={link.theme} to={helperProfileId(link.text)} className={cls.link}>
            <span className={cls.linkIcon}>{sidebarIconRender(link.icon)}</span>
            <span className={classNames('', { [cls.linkTextWhenClose]: !open }, [])}>
                {t(link.text)}
            </span>
        </AppLink>
    );
};

export default SidebarItem;
