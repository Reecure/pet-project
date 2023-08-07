import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const myArticlePageLoading = (state: RootState) => state.myArticlesReducer.loading;
export const myArticleHaveMoreLoading = (state: RootState) => state.myArticlesReducer.haveMore;
export const myArticlePageSelector = (state: RootState) => state.myArticlesReducer.page;
export const myArticlesLimitSelector = (state: RootState) => state.myArticlesReducer.limit;
export const myArticlesQuerySelector = (state: RootState) => state.myArticlesReducer.query;
