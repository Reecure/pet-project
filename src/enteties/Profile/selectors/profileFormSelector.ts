import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const profileFormSelector = (state: RootState) => state.profileReducer.form;
