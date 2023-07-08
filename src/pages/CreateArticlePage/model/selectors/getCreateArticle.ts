import { RootState } from 'app/providers/ReduxProvider/config/store';

export const getCreateFields = (state: RootState) => state.addArticleReducer;
