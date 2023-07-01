import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export interface SidebarLink {
    theme: AppLinkTheme,
    to: AppRoutes,
    text: string
    icon: string
    authOnly?: boolean
}

export const SidebarLinks :SidebarLink[] = [
    {
        to: AppRoutes.MAIN,
        theme: AppLinkTheme.SECONDARY,
        text: 'Main',
        icon: 'AiOutlineHome',
    },
    {
        to: AppRoutes.ABOUT,
        theme: AppLinkTheme.SECONDARY,
        text: 'About',
        icon: 'BsListStars',
    },
    {
        to: AppRoutes.PROFILE,
        theme: AppLinkTheme.SECONDARY,
        text: 'Profile',
        icon: 'BsFillPersonLinesFill',
        authOnly: true,
    },
];
