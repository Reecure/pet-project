import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {Menu} from '@headlessui/react';
import {useNavigate} from 'react-router-dom';
import {logout} from '@/enteties/User/model/slice/userSlice';
import {Avatar} from '@/shared/ui/Avatar';
import {AppLink} from '@/shared/ui/AppLink';
import {classNames} from '@/shared/lib/classNames/classNames';
import {
    getAdminRoute,
    getCreateArticleRoute,
    getMyArticlesRoute,
    getProfileRoute,
} from '@/shared/config/routeConfig/routeConfig';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {User} from '@/enteties/User/model/types';
import {isAdmin, isManager} from '@/enteties/User/model/selectors/userRoleSelector';
import cls from './UserDropdownProfile.module.scss';

interface Props {
    user: User;
}

const UserDropdownProfile: FC<Props> = ({user}) => {
    const {t} = useTranslation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isUserAdmin = useAppSelector(isAdmin);
    const isUserManager = useAppSelector(isManager);

    const goToUserProfileHandler = () => {
        navigate(getProfileRoute(user.id));
    };

    const onLogoutHandler = () => {
        dispatch(logout());
    };

    const haveAccessToAdmiPanel = isUserAdmin || isUserManager;

    return (
        <div className={classNames(cls.UserDropdownProfile, {}, [])}>
            <Menu as="div" className={cls.menuWrapper}>
                <div>
                    <Menu.Button className={cls.menuButton}>
                        <Avatar size={37} src={user.avatar}/>
                    </Menu.Button>
                </div>

                <Menu.Items className={cls.menuItems}>
                    <Menu.Item>{({active}) => <div onClick={goToUserProfileHandler}>Profile</div>}</Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <AppLink to={getCreateArticleRoute()}
                                     className={cls.UserDropdownProfile}>
                                Create article
                            </AppLink>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <AppLink to={getMyArticlesRoute()}
                                     className={cls.UserDropdownProfile}>
                                My articles
                            </AppLink>
                        )}
                    </Menu.Item>
                    {haveAccessToAdmiPanel && (
                        <Menu.Item>
                            {({active}) => (
                                <AppLink to={getAdminRoute()}
                                         className={cls.UserDropdownProfile}>
                                    Admin
                                </AppLink>
                            )}
                        </Menu.Item>
                    )}
                    <Menu.Item>{({active}) => <div onClick={onLogoutHandler}>Logout</div>}</Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default UserDropdownProfile;
