import { RootState } from 'app/providers/ReduxProvider/config/store';

export const commentisLoading = (state: RootState) => state.commentsReducer.loading;
