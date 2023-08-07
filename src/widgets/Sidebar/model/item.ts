import { getAboutRoute, getArticlesRoute, getMainRoute } from '@/shared/config/routeConfig/routeConfig';

export const enum Links {
    Main = 'Main',
    About = 'About',
    Articles = 'Articles',
}

export interface SidebarLink {
    to: string,
    text: Links
    icon: Links
    authOnly?: boolean
}

export const SidebarLinks: SidebarLink[] = [
    {
        to: getMainRoute(),
        text: Links.Main,
        icon: Links.Main,
    },
    {
        to: getAboutRoute(),
        text: Links.About,
        icon: Links.About,
    },

    {
        to: getArticlesRoute(),
        text: Links.Articles,
        icon: Links.Articles,
        authOnly: true,
    },
];
