import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { CreateArticlePage } from '@/pages/CreateArticlePage';
import { AdminPage } from '@/pages/AdminPage';
import { Roles } from '@/enteties/User/model/types';
import { EditArticlePage } from '@/pages/EditArticlePage';
import { MyArticlesPage } from '@/pages/MyArticlesPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: Roles[];
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    MY_ARTICLES = 'my-aricles',
    ARTICLE = 'article',
    ARTICLES = 'articles',
    CREATE_ARTICLE = 'create-article',
    EDIT_ARTICLE = 'edit-article',
    ADMIN = 'admin',
    // Other paths
    NOT_FOUND = 'not_found',
}

export const getMainRoute = () => ('/');
export const getAboutRoute = () => ('/about');
export const getProfileRoute = (id: string) => (`/profile/${id}`);
export const getMyArticlesRoute = () => ('/my-articles');
export const getArticlesRoute = () => ('/articles');
export const getArticleRoute = (id: string) => (`/article/${id}`);
export const getCreateArticleRoute = () => ('/create-article');
export const getEditArticleRoute = (id: string) => (`/edit-article/${id}`);
export const getAdminRoute = () => ('/admin');
export const getNotFoundRoute = () => ('*');

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getAboutRoute(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getProfileRoute(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.MY_ARTICLES]: {
        path: getMyArticlesRoute(),
        element: <MyArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getArticlesRoute(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE]: {
        path: getArticleRoute(':id'),
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.CREATE_ARTICLE]: {
        path: getCreateArticleRoute(),
        element: <CreateArticlePage />,
        authOnly: true,
    },
    [AppRoutes.EDIT_ARTICLE]: {
        path: getEditArticleRoute(':id'),
        element: <EditArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: getAdminRoute(),
        element: <AdminPage />,
        authOnly: true,
        roles: [Roles.ADMIN, Roles.MANAGER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <NotFoundPage />,
    },
};
