import {
    getAboutRoute,
    getArticlesRoute,
    getCreateArticleRoute,
    getMainRoute,
    getMyArticlesRoute,
} from '@/shared/config/routeConfig/routeConfig';

export const enum Links {
    // eslint-disable-next-line no-unused-vars
    Main = 'Main',
    // eslint-disable-next-line no-unused-vars
    About = 'About',
    // eslint-disable-next-line no-unused-vars
    Articles = 'Articles',
    // eslint-disable-next-line no-unused-vars
    CreateArticle = 'Create article',
    // eslint-disable-next-line no-unused-vars
    MyArticles = 'My articles'
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
    {
        to: getCreateArticleRoute(),
        text: Links.CreateArticle,
        icon: Links.CreateArticle,
        authOnly: true,
    },
    {
        to: getMyArticlesRoute(),
        text: Links.MyArticles,
        icon: Links.MyArticles,
        authOnly: true,
    },
];
