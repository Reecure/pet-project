import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { Button } from 'shared';
import cls from './ArticlesPage.module.scss';
import ArticleHeader from './ArticlesComponents/ArticleHeader/ArticleHeader';
import {
    articleHaveMoreSelector, articlePageSelector, articlesLoadingSelector, articlesViewsSelector,
} from '../model/selector/articlesSelector';
import ArticleBigComponent from './ArticlesComponents/ArticleBigComponent/ArticleBigComponent';
import {
    getArticles, setNextPage, setPrevPage, viewTypes,
} from '../model/slice/articlesSlice';
import ArticleSmallComponent from './ArticlesComponents/ArticleSmallComponent/ArticleSmallComponent';
import { getAllArticles } from '../model/services/getArticles';

interface Props {
}

const ArticlesPage:FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articlesLoading = useAppSelector(articlesLoadingSelector);
    const selectViewType = useAppSelector(articlesViewsSelector);
    const articles = useAppSelector(getArticles.selectAll);
    const haveMore = useAppSelector(articleHaveMoreSelector);
    const page = useAppSelector(articlePageSelector);

    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);

    const nextPageHandler = useCallback(
        () => {
            dispatch(setNextPage());
            dispatch(getAllArticles());
        },
        [dispatch],
    );

    const prevPageHandler = useCallback(
        () => {
            dispatch(setPrevPage());
            dispatch(getAllArticles());
        },
        [dispatch],
    );

    if (articlesLoading) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            <ArticleHeader />
            <div className={cls.smallComponentsWrapper}>
                {selectViewType === viewTypes.SMALL && articles.map((item) => <ArticleSmallComponent article={item} />)}
            </div>
            <div>
                {selectViewType === viewTypes.BIG && articles.map((item) => <ArticleBigComponent article={item} />)}
            </div>

            <div>

                <Button disabled={page <= 1} onClick={prevPageHandler}>prev</Button>

                <Button disabled={!haveMore} onClick={nextPageHandler}>next</Button>

            </div>
        </div>
    );
};

export default ArticlesPage;
