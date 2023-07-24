import { RootState } from '@/app/providers/ReduxProvider/config/store';

export const isLoggedSelector = (state: RootState) => state.user.isLogged;
