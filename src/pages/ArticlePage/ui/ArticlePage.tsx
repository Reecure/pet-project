import { useTranslation } from 'react-i18next';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { ArticleAllProps, ArticleDetails, getArticleById } from '@/enteties/Article';
import { Loader } from '@/shared/ui/Loader';
import cls from './ArticlePage.module.scss';
import { commentisLoading, Comments, getCommentsByArticleId } from '@/features/getComments';
import { getArticleComments } from '@/features/getComments/model/slice/commentsSlice';

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
    if (error) {
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
