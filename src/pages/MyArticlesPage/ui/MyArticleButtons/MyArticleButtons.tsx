import { useTranslation } from 'react-i18next';
import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './MyArticleButtons.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getArticleRoute, getEditArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import { deleteArticle } from '@/features/CRUDArticle';
import { getAllMyArticles } from '../../model/services/getMyArticles';
import { User } from '@/enteties/User/model/types';
import { resetPage } from '@/pages/MyArticlesPage/model/slice/myArticlesSlice';

interface Props {
    articleId: string
    className?: string
    user: User,
    deleteServerError: () => void
}

const MyArticleButtons: FC<Props> = ({
    articleId, className, user, deleteServerError,
}) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const [serverError, setServerError] = useState(false);

    const navigation = useNavigate();

    const showHandler = useCallback(() => {
        navigation(getArticleRoute(articleId));
    }, [articleId, navigation]);

    const editHandler = useCallback(() => {
        navigation(getEditArticleRoute(articleId));
    }, [articleId, navigation]);

    const deleteHandler = useCallback(async () => {
        const confirmed = window.confirm('Confirm delete article?');
        if (confirmed) {
            await dispatch(deleteArticle(articleId)).unwrap().then((res) => {
                setServerError(false);
            }).catch((error) => {
                deleteServerError();
                setServerError(true);
            });
            await dispatch(getAllMyArticles(user.id)).unwrap().then((res) => {
                console.log('not error');
            }).catch((error) => {
                console.log('error');
            });
            await dispatch(resetPage());
        }
    }, [dispatch]);

    return (
        <div className={classNames(cls.MyArticleButtons, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={editHandler}>{t('Edit')}</Button>
            <Button theme={ThemeButton.OUTLINE} onClick={showHandler}>{t('Show')}</Button>
            <Button onClick={deleteHandler} theme={ThemeButton.OUTLINE_RED}>{t('Delete')}</Button>
        </div>

    );
};
export default MyArticleButtons;
