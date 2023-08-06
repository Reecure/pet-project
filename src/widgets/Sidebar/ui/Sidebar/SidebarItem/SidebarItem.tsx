import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {isLoggedSelector} from '@/enteties/User/model/selectors/isLoggedSelector';
import {AppLink} from '@/shared/ui/AppLink';
import {SidebarLink} from '../../../model/item';
import cls from './SidebarItem.module.scss';
import {sidebarIconRender} from '@/widgets/Sidebar/helpers/sidebarIconRender';

interface Props {
    link: SidebarLink
    open: boolean
}

const SidebarItem: FC<Props> = ({link, open}) => {
    const {t} = useTranslation();

    const selectIsLogged = useAppSelector(isLoggedSelector);

    if (!selectIsLogged && link.authOnly) {
        return null;
    }

    return (
        <AppLink to={link.to} className={cls.link}>
            <span className={cls.linkIcon}>{sidebarIconRender(link.icon)}</span>

            <span
                className={classNames(`${!open ? `${cls.linkTextWhenClose}` : ''}`, {}, [])}>
                {t(link.text)}
            </span>
        </AppLink>
    );
};

export default memo(SidebarItem);
