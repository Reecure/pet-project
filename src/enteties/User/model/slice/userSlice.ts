import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { CURRENCIES } from 'enteties/Currency/model/types/currencies';
import { COUNTRIES } from 'enteties/Country/model/types/countries';
import { User } from '../types';

interface State {
    userData: User;
    error: string | undefined;
    loading: boolean;
    isLogged: boolean;
}

const initialState: State = {
    userData: undefined,
    error: undefined,
    loading: false,
    isLogged: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            state.isLogged = true;
        },
        initAuthData: (state) => {
            const userInStorage = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (userInStorage) {
                state.userData = JSON.parse(userInStorage);
                state.isLogged = true;
            }
        },
        logout: (state) => {
            state.userData = undefined;
            state.isLogged = false;
            window.location.href = '/';
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export default userSlice.reducer;

export const { setAuthData, initAuthData, logout } = userSlice.actions;
