import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const profileSelector = (state: RootState) => state.profileReducer.userInfo;
