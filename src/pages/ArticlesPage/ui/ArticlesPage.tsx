import {useTranslation} from 'react-i18next';
import {FC, useEffect} from 'react';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import ArticleHeader from './ArticlesComponents/ArticleHeader/ArticleHeader';
import ArticleMainContent from './ArticlesComponents/ArticleMainContent/ArticleMainContent';
import {
    articleFieldSelector,
    articleOrderSelector,
    articlePageSelector,
    articleQuerySelector,
    articleTypesSelector,
} from '../model/selector/articlesSelector';

interface Props {
}

const ArticlesPage: FC<Props> = () => {
    const {t} = useTranslation();

    const page = useAppSelector(articlePageSelector);
    const sort = useAppSelector(articleFieldSelector);
    const order = useAppSelector(articleOrderSelector);
    const type = useAppSelector(articleTypesSelector);
    const query = useAppSelector(articleQuerySelector);

    const navigate = useNavigate();

    useEffect(() => {
        const queryString = qs.stringify(
            {
                _page: page,
                _sort: sort.length > 0 ? sort : undefined,
                _order: order.length > 0 ? order : undefined,
                type: type.length > 0 ? type.join(',') : undefined,
                q: query,
            },
            {
                skipNulls: true,
            },
        );
        navigate(`/articles?${queryString}`);
    }, [navigate, page, sort, order, type, query]);

    return (
        <div data-testid='articlesPage'>
            <ArticleHeader/>
            <ArticleMainContent/>
        </div>
    );
};

export default ArticlesPage;
