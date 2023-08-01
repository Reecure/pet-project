import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const articlesLoadingSelector = (state: RootState) => state.articlesReducer.loading;

// export const articlesErrorSelector = (state: RootState) => state.articlesReducer.error;

export const articlesViewsSelector = (state: RootState) => state.articlesReducer.viewsType;
export const articlesLimitSelector = (state: RootState) => state.articlesReducer.limit;
export const articlePageSelector = (state: RootState) => state.articlesReducer.page;
export const articleHaveMoreSelector = (state: RootState) => state.articlesReducer.haveMore;
export const articleOrderSelector = (state: RootState) => state.articlesReducer.order;
export const articleFieldSelector = (state: RootState) => state.articlesReducer.sortByField;
export const articleTypesSelector = (state: RootState) => state.articlesReducer.types;
