import articleReducer from './model/slice/articleSlice';
import ArticleCodeComponent from './ui/ArticleCodeComponent/ArticleCodeComponent';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleImageComponent from './ui/ArticleImageComponent/ArticleImageComponent';
import ArticleTextComponent from './ui/ArticleTextComponent/ArticleTextComponent';
import { getArticleById } from './model/services/getArticleById';
import {
    ArticleAllProps, ArticleError, ArticleFields, ArticleLoadig,
} from './model/selectors/articleSelector';

export {
    getArticleById, articleReducer,
    ArticleDetails, ArticleTextComponent,
    ArticleCodeComponent,
    ArticleImageComponent, ArticleAllProps,
    ArticleFields,
    ArticleLoadig,
    ArticleError,
};
