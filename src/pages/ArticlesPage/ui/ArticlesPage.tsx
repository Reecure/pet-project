import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, useEffect,
} from 'react';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { types } from 'util';
import cls from './ArticlesPage.module.scss';
import ArticleHeader from './ArticlesComponents/ArticleHeader/ArticleHeader';
import ArticleMainContent from './ArticlesComponents/ArticleMainContent/ArticleMainContent';
import {
    articleFieldSelector, articleOrderSelector, articlePageSelector, articleTypesSelector,
} from '../model/selector/articlesSelector';

interface Props {
}

const ArticlesPage:FC<Props> = () => {
    const { t } = useTranslation();

    const page = useAppSelector(articlePageSelector);
    const sort = useAppSelector(articleFieldSelector);
    const order = useAppSelector(articleOrderSelector);
    const type = useAppSelector(articleTypesSelector);

    const navigate = useNavigate();

    useEffect(() => {
        const queryString = qs.stringify(
            {
                _page: page,
                _sort: sort.length > 0 ? sort : undefined,
                _order: order.length > 0 ? order : undefined,
                type: type.length > 0 ? type.join(',') : undefined,
            },
            {
                skipNulls: true,
            },
        );
        navigate(`/articles?${queryString}`);
    }, [navigate, page, sort, order, type]);

    console.log(navigate);

    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            <ArticleHeader />
            <ArticleMainContent />
        </div>
    );
};

export default ArticlesPage;
