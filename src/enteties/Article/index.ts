import articleReducer from './model/slice/articleSlice';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import {getArticleById} from './model/services/getArticleById';
import {ArticleAllProps, ArticleError, ArticleFields, ArticleLoading,} from './model/selectors/articleSelector';

export {
    getArticleById, articleReducer,
    ArticleDetails,
    ArticleAllProps,
    ArticleFields,
    ArticleLoading,
    ArticleError,
};
