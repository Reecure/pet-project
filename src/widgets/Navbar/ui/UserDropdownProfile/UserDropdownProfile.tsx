import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { User, logout } from 'enteties/User/model/slice/userSlice';
import { Avatar } from 'shared/ui/Avatar';
import { Menu } from '@headlessui/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Route, useNavigate, useNavigation } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/hooks';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './UserDropdownProfile.module.scss';

interface Props {
    user: User
}

const UserDropdownProfile:FC<Props> = ({ user }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const goToUserProfileHandler = () => {
        navigate(`${AppRoutes.PROFILE}/${user.id}`);
    };

    const onLogoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div className={classNames(cls.UserDropdownProfile, {}, [])}>
            <Menu as="div" className={cls.menuWrapper}>
                <div>
                    <Menu.Button className={cls.menuButton}><Avatar size={37} src={user.avatar} /></Menu.Button>
                </div>

                <Menu.Items className={cls.menuItems}>
                    <Menu.Item>
                        {({ active }) => (
                            <div onClick={goToUserProfileHandler}>
                                Profile
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <AppLink theme={AppLinkTheme.SECONDARY} to={AppRoutes.CREATE_ARTICLE}>
                                Create article
                            </AppLink>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div onClick={onLogoutHandler}>
                                Logout
                            </div>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

        </div>
    );
};

export default UserDropdownProfile;