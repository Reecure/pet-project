import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const ArticleAllProps = (state: RootState) => state.articleReducer;
export const ArticleFields = (state: RootState) => state?.articleReducer.article;
export const ArticleLoadig = (state: RootState) => state?.articleReducer.loading;
export const ArticleError = (state: RootState) => state?.articleReducer.error;
