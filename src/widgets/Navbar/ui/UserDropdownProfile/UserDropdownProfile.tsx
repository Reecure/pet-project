import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { User } from '@/enteties/User/model/types';
import { isAdmin, isManager, logout } from '@/enteties/User';
import cls from './UserDropdownProfile.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { AppLink } from '@/shared/ui/AppLink';
import {
    getAdminRoute,
    getCreateArticleRoute,
    getMyArticlesRoute,
    getProfileRoute,
} from '@/shared/config/routeConfig/routeConfig';

interface Props {
    user: User;
}

const UserDropdownProfile: FC<Props> = ({ user }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isUserAdmin = useAppSelector(isAdmin);
    const isUserManager = useAppSelector(isManager);

    const onLogoutHandler = () => {
        dispatch(logout());
    };

    const haveAccessToAdmiPanel = isUserAdmin || isUserManager;

    return (
        <div className={classNames(cls.UserDropdownProfile, {}, [])}>
            <Menu as="div" className={cls.menuWrapper}>
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className={cls.menuButton}>
                                <Avatar size={37} src={user.avatar} />
                            </Menu.Button>
                        </div>
                        <Transition
                            enter={cls.menuItemsTiming}
                            enterFrom={cls.menuItemsFrom}
                            enterTo={cls.menuItemsTo}
                            leave={cls.menuItemsTiming}
                            leaveFrom={cls.menuItemsTo}
                            leaveTo={cls.menuItemsFrom}
                        >
                            <Menu.Items className={cls.menuItems}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <AppLink
                                            to={getProfileRoute(user.id)}
                                            className={classNames(cls.menuItem, { [cls.active]: active }, [])}
                                        >
                                            {t('Profile')}
                                        </AppLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <AppLink
                                            to={getCreateArticleRoute()}
                                            className={classNames(cls.menuItem, { [cls.active]: active }, [])}
                                        >
                                            {t('Create article')}
                                        </AppLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <AppLink
                                            to={getMyArticlesRoute()}
                                            className={classNames(cls.menuItem, { [cls.active]: active }, [])}
                                        >
                                            {t('My articles')}
                                        </AppLink>
                                    )}
                                </Menu.Item>
                                {haveAccessToAdmiPanel && (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <AppLink
                                                to={getAdminRoute()}
                                                className={classNames(cls.menuItem, { [cls.active]: active }, [])}
                                            >
                                                {t('Admin')}
                                            </AppLink>
                                        )}
                                    </Menu.Item>
                                )}
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={onLogoutHandler}
                                            className={classNames(cls.menuItem, { [cls.active]: active }, [])}
                                        >
                                            {t('Logout')}
                                        </div>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default UserDropdownProfile;
