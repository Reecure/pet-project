import { useTranslation } from 'react-i18next';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { getArticleById } from '@/enteties/Article/services/getArticleById';
import { ArticleAllProps } from '@/enteties/Article/selectors/articleSelector';
import { ArticleDetails } from '@/enteties/Article';
import Comments from '@/features/getComments/ui/Comments';
import { getCommentsByArticleId } from '@/features/getComments/model/services/getCommentsByArticleId';
import { getArticleComments } from '@/features/getComments/model/slice/commentsSlice';
import { commentisLoading } from '@/features/getComments/model/selectors/commentPropsSelector';
import { Loader } from '@/shared/ui/Loader';
import cls from './ArticlePage.module.scss';

interface Props {
}

const ArticlePage: FC<Props> = () => {
    const { t } = useTranslation();

    const { id } = useParams();

    const dispatch = useAppDispatch();

    const { article, error, loading } = useAppSelector(ArticleAllProps);
    const commentLoading = useAppSelector(commentisLoading);
    const comments = useAppSelector(getArticleComments.selectAll);

    useEffect(() => {
        dispatch(getArticleById(id));
        dispatch(getCommentsByArticleId(id));
    }, [dispatch, id]);

    if (loading) {
        return (
            <div className={cls.LoaderWrapper}>
                <Loader />
            </div>
        );
    }
    if (error || !id) {
        return <div>{t('Error')}</div>;
    }
    if (article === undefined) {
        return <div>{t('Article doesn`t exist')}</div>;
    }

    return (
        <div className={classNames(cls.ArticlePage, {}, [])}>
            <ArticleDetails article={article} />
            <Comments isLoading={commentLoading} comments={comments} />
        </div>
    );
};

export default memo(ArticlePage);
