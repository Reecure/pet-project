import { RootState } from 'app/providers/ReduxProvider/config/store';

export const SelectIsLogged = (state: RootState) => state.user.logged;
