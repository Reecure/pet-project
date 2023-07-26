import { useTranslation } from 'react-i18next';
import { FC, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MyArticlesPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import { getMyArticles } from '@/pages/MyArticlesPage/model/slice/myArticlesSlice';
import { getAllMyArticles } from '@/pages/MyArticlesPage/model/services/getMyArticles';
import { myArticlePageLoading } from '@/pages/MyArticlesPage/model/selectors/myArticlesSelectors';
import { Loader } from '@/shared/ui/Loader';
import Stack, { StackPosition } from '@/shared/ui/Stack/ui/Stack';
import MyArticleButtons from '@/pages/MyArticlesPage/ui/MyArticleButtons/MyArticleButtons';
import UserHasntArticles from '@/pages/MyArticlesPage/ui/UserHasntArticles/UserHasntArticles';

interface Props {
}

const MyArticlesPage: FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const user = useAppSelector(userDataSelector);
    const articles = useAppSelector(getMyArticles.selectAll);
    const isLoading = useAppSelector(myArticlePageLoading);

    useEffect(() => {
        dispatch(getAllMyArticles(user.id));
    }, [dispatch, user]);

    if (isLoading) {
        return (
            <Stack childrenPosition={StackPosition.CENTER}>
                <Loader />
            </Stack>

        );
    }

    if (articles.length === 0) {
        return (
            <UserHasntArticles />
        );
    }

    return (
        <div className={classNames(cls.MyArticlesPage, {}, [])}>
            {articles.map((article) => (
                <div key={article.id} className={cls.articleWrapper}>
                    <div>
                        {article.title}
                    </div>
                    <MyArticleButtons user={user} articleId={article.id} className={cls.articleButtonsWrapper} />
                </div>
            ))}
        </div>
    );
};
export default MyArticlesPage;
