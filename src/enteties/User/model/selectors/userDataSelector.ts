import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const userDataSelector = (state: RootState) => state.user.userData;
