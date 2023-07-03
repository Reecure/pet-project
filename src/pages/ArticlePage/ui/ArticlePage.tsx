import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { getArticleById } from 'enteties/Article/services/getArticleById';
import { ArticleAllProps } from 'enteties/Article/selectors/articleSelector';
import { ArticleDetails } from 'enteties/Article';
import cls from './ArticlePage.module.scss';

interface Props {
}

const ArticlePage:FC<Props> = () => {
    const { t } = useTranslation();

    const { id } = useParams();

    const dispatch = useAppDispatch();

    const { article, error, loading } = useAppSelector(ArticleAllProps);

    useEffect(() => {
        dispatch(getArticleById(id));
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error || !id) {
        return <div>Error</div>;
    }
    if (article === undefined) {
        return <div>doesnt exsist</div>;
    }

    return (
        <div className={classNames(cls.ArticlePage, {}, [])}>
            <ArticleDetails article={article} />
        </div>
    );
};

export default memo(ArticlePage);
