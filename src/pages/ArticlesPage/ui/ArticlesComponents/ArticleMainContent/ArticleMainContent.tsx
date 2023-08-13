import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import {
    articleHaveMoreSelector,
    articlePageSelector,
    articlesLoadingSelector,
    articlesViewsSelector,
} from '../../../model/selector/articlesSelector';
import {
    getArticles, setNextPage, setPrevPage, viewTypes,
} from '../../../model/slice/articlesSlice';
import { getAllArticles } from '../../../model/services/getArticles';
import { Button } from '@/shared/ui/Button';
import cls from './ArticleMainContent.module.scss';
import ArticleBigComponent from '@/shared/ui/ArticleBigComponent/ArticleBigComponent';
import ArticleSmallComponent from '@/shared/ui/ArticleSmallComponent/ArticleSmallComponent';
import { ArticlesIsEmpty } from '@/shared/ui/ArticlesIsEmpty';
import ServerError from '@/widgets/ServerError/ServerError';
import { Loader } from '@/shared/ui/Loader';

interface Props {
}

const ArticleMainContent: FC<Props> = () => {
    const { t } = useTranslation();

    const [articlesServerError, setArticlesServerError] = useState(false);

    const selectViewType = useAppSelector(articlesViewsSelector);
    const articles = useAppSelector(getArticles.selectAll);
    const articlesLoading = useAppSelector(articlesLoadingSelector);
    const haveMore = useAppSelector(articleHaveMoreSelector);
    const page = useAppSelector(articlePageSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllArticles()).unwrap().then((res) => {
            setArticlesServerError(false);
        }).catch((error) => {
            setArticlesServerError(true);
        });
    }, [dispatch]);

    const nextPageHandler = useCallback(() => {
        dispatch(setNextPage());
        dispatch(getAllArticles()).unwrap().then((res) => {
            setArticlesServerError(false);
        }).catch((error) => {
            setArticlesServerError(true);
        });
    }, [dispatch]);

    const prevPageHandler = useCallback(() => {
        dispatch(setPrevPage());
        dispatch(getAllArticles()).unwrap().then((res) => {
            setArticlesServerError(false);
        }).catch((error) => {
            setArticlesServerError(true);
        });
    }, [dispatch]);

    if (articlesLoading) {
        return (
            <div className={cls.loaderWrapper}>
                <Loader />
            </div>
        );
    }

    if (articlesServerError) {
        return <ServerError />;
    }

    if (articles.length === 0) {
        return (
            <div className={cls.emptyArticlesWrapper}>
                <ArticlesIsEmpty />
            </div>
        );
    }

    return (
        <section className={classNames(cls.ArticleMainContent, {}, [])}>
            <div className={cls.smallComponentsWrapper}>
                {selectViewType === viewTypes.SMALL && articles.map((item) => (
                    <ArticleSmallComponent
                        key={item.id}
                        article={item}
                    />
                ))}
            </div>
            <div>
                {selectViewType === viewTypes.BIG && articles.map((item) => (
                    <ArticleBigComponent
                        key={item.id}
                        article={item}
                        userId={item.userId}
                    />
                ))}
            </div>

            <div className={cls.pagination}>
                <Button disabled={page <= 1} onClick={prevPageHandler}><AiOutlineLeft /></Button>
                <Button disabled={!haveMore} onClick={nextPageHandler}><AiOutlineRight /></Button>

            </div>

        </section>
    );
};

export default memo(ArticleMainContent);
