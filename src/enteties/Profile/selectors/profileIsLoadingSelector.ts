import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const profileIsLoadingSelector = (state: RootState) => state.profileReducer.loading;
