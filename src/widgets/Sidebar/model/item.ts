import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export const enum Links {
    Main = 'Main',
    About = 'About',
    Profile = 'Profile',
    Articles = 'Articles',
}

export interface SidebarLink {
    theme: AppLinkTheme,
    to: AppRoutes,
    text: Links
    icon: string
    authOnly?: boolean
}
export const SidebarLinks :SidebarLink[] = [
    {
        to: AppRoutes.MAIN,
        theme: AppLinkTheme.SECONDARY,
        text: Links.Main,
        icon: 'AiOutlineHome',
    },
    {
        to: AppRoutes.ABOUT,
        theme: AppLinkTheme.SECONDARY,
        text: Links.About,
        icon: 'BsListStars',
    },
    {
        to: AppRoutes.PROFILE,
        theme: AppLinkTheme.SECONDARY,
        text: Links.Profile,
        icon: 'BsFillPersonLinesFill',
        authOnly: true,
    },
    {
        to: AppRoutes.ARTICLES,
        theme: AppLinkTheme.SECONDARY,
        text: Links.Articles,
        icon: 'PiArticleMediumBold',
        authOnly: true,
    },
];
