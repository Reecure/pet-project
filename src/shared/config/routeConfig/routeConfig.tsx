import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { CreateArticlePage } from '@/pages/CreateArticlePage';
import { AdminPage } from '@/pages/AdminPage';
import { Roles } from 'enteties/User/model/types';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: Roles[];
};

export enum AppRoutes {
    MAIN = '',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE = 'article',
    ARTICLES = 'articles',
    CREATE_ARTICLE = 'create-article',
    ADMIN = 'admin',
    // Other paths
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // +:id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE]: '/article/', // +:id
    [AppRoutes.CREATE_ARTICLE]: '/create-article',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[''],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: `${RoutePath.article}:id`,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.CREATE_ARTICLE]: {
        path: RoutePath['create-article'],
        element: <CreateArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        authOnly: true,
        roles: [Roles.ADMIN, Roles.MANAGER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
