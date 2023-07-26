import {
    getAboutRoute, getArticlesRoute, getMainRoute, getProfileRoute,
} from '@/shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from '@/shared/ui/AppLink';

export const enum Links {
    Main = 'Main',
    About = 'About',
    Profile = 'Profile',
    Articles = 'Articles',
}

export interface SidebarLink {
    theme: AppLinkTheme,
    to: string,
    text: Links
    icon: string
    authOnly?: boolean
}

export const SidebarLinks: SidebarLink[] = [
    {
        to: getMainRoute(),
        theme: AppLinkTheme.SECONDARY,
        text: Links.Main,
        icon: 'AiOutlineHome',
    },
    {
        to: getAboutRoute(),
        theme: AppLinkTheme.SECONDARY,
        text: Links.About,
        icon: 'BsListStars',
    },
    {
        to: getProfileRoute(''),
        theme: AppLinkTheme.SECONDARY,
        text: Links.Profile,
        icon: 'BsFillPersonLinesFill',
        authOnly: true,
    },
    {
        to: getArticlesRoute(),
        theme: AppLinkTheme.SECONDARY,
        text: Links.Articles,
        icon: 'PiArticleMediumBold',
        authOnly: true,
    },
];
