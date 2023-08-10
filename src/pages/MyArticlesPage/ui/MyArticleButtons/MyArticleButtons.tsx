import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './MyArticleButtons.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getArticleRoute, getEditArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import { deleteArticle } from '@/features/CRUDArticle';
import { getAllMyArticles } from '../../model/services/getMyArticles';
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
            dispatch(deleteArticle(articleId)).unwrap().then((res) => {
                console.log('not error');
            }).catch((error) => {
                console.log('error');
            });
            dispatch(getAllMyArticles(user.id)).unwrap().then((res) => {
                console.log('not error');
            }).catch((error) => {
                console.log('error');
            });
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.MyArticleButtons, {}, [className])}>
            <Button onClick={editHandler}>{t('Edit')}</Button>
            <Button onClick={showHandler}>{t('Show')}</Button>
            <Button onClick={deleteHandler} theme={ThemeButton.OUTLINE_RED}>{t('Delete')}</Button>
        </div>
    );
};
export default MyArticleButtons;
