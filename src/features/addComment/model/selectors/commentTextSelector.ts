import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const commentTextSelector = (state: RootState) => state.addCommentReducer.text;
