import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MyArticleButtons.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getArticleRoute, getEditArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import { deleteArticle } from '@/features/CRUDArticle/model/services/deleteArticle';
import { getAllMyArticles } from '@/pages/MyArticlesPage/model/services/getMyArticles';
import { User } from '@/enteties/User/model/types';

interface Props {
    articleId: string
    className?: string
    user: User
}

const MyArticleButtons: FC<Props> = ({ articleId, className, user }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const navigation = useNavigate();

    const showHandler = useCallback(() => {
        navigation(getArticleRoute(articleId));
    }, [articleId, navigation]);

    const editHandler = useCallback(() => {
        navigation(getEditArticleRoute(articleId));
    }, [articleId, navigation]);

    const deleteHandler = useCallback(() => {
        const confirmed = window.confirm('Confirm delete article?');
        if (confirmed) {
            dispatch(deleteArticle(articleId));
            dispatch(getAllMyArticles(user.id));
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.MyArticleButtons, {}, [className])}>
            <Button onClick={editHandler}>Edit</Button>
            <Button onClick={showHandler}>Show</Button>
            <Button onClick={deleteHandler} theme={ThemeButton.OUTLINE_RED}>Delete</Button>
        </div>
    );
};
export default MyArticleButtons;
