import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect, memo } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import {
    articleHaveMoreSelector, articlePageSelector, articlesLoadingSelector, articlesViewsSelector,
} from 'pages/ArticlesPage/model/selector/articlesSelector';
import {
    getArticles, setNextPage, setPrevPage, viewTypes,
} from 'pages/ArticlesPage/model/slice/articlesSlice';
import { getAllArticles } from 'pages/ArticlesPage/model/services/getArticles';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';
import cls from './ArticleMainContent.module.scss';
import ArticleBigComponent from '../ArticleBigComponent/ArticleBigComponent';
import ArticleSmallComponent from '../ArticleSmallComponent/ArticleSmallComponent';

interface Props {
}

const ArticleMainContent:FC<Props> = () => {
    const { t } = useTranslation();
    const selectViewType = useAppSelector(articlesViewsSelector);
    const articles = useAppSelector(getArticles.selectAll);
    const articlesLoading = useAppSelector(articlesLoadingSelector);
    const haveMore = useAppSelector(articleHaveMoreSelector);
    const page = useAppSelector(articlePageSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllArticles());
    }, [dispatch]);

    if (articlesLoading) {
        return (
            <div className={cls.loaderWrapper}><Loader /></div>
        );
    }
    const nextPageHandler = () => {
        dispatch(setNextPage());
        dispatch(getAllArticles());
    };

    const prevPageHandler = () => {
        dispatch(setPrevPage());
        dispatch(getAllArticles());
    };

    return (
        <div className={classNames(cls.ArticleMainContent, {}, [])}>
            <div className={cls.smallComponentsWrapper}>
                {selectViewType === viewTypes.SMALL && articles.map((item) => <ArticleSmallComponent article={item} />)}
            </div>
            <div>
                {selectViewType === viewTypes.BIG && articles.map((item) => <ArticleBigComponent article={item} />)}
            </div>

            <div className={cls.pagination}>
                <Button disabled={page <= 1} onClick={prevPageHandler}>{'<'}</Button>

                <Button disabled={!haveMore} onClick={nextPageHandler}>{'>'}</Button>
            </div>
        </div>
    );
};

export default memo(ArticleMainContent);
