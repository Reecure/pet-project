import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { CURRENCIES } from 'enteties/Currency/model/types/currencies';
import { COUNTRIES } from 'enteties/Country/model/types/countries';
import { getUserByCredentials } from '../../../../features/AuthByUsername/services/getUserByCredentials';

export interface User {
    'first': string,
    'lastname':string,
    'age': number,
    'currency': CURRENCIES,
    'country': COUNTRIES,
    'city': string,
    'username': string,
    'avatar': string
}

interface State {
    userData: User
    error: string | undefined,
    loading: boolean
    isLogged: boolean
}

const initialState:State = {
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
    extraReducers: (builder) => {
        builder.addCase(getUserByCredentials.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        });
        builder.addCase(getUserByCredentials.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        });
        builder.addCase(getUserByCredentials.pending, (state) => {
            state.loading = true;
        });
    },
});

export default userSlice.reducer;

export const { setAuthData, initAuthData, logout } = userSlice.actions;
