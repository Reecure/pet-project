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
import { Text } from '@/shared/ui/Text';
import { FontWeight } from '@/shared/ui/Text/model/types';

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
        <li>
            <AppLink to={link.to} className={cls.link} onClick={outerWidth < 640 && openSidebar}>
                <span className={cls.linkIcon}>{sidebarIconRender(link.icon)}</span>
                <div
                    className={classNames(`${!open ? `${cls.linkTextWhenClose}` : ''}`, {}, [])}
                >
                    <Text text={t(link.text)} fontWeight={FontWeight.FONTBOLD} />
                </div>
            </AppLink>
        </li>
    );
};

export default memo(SidebarItem);
