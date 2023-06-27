import { createSlice } from '@reduxjs/toolkit';
import { log } from 'console';

export interface User {
    username: string,
    email: string,
    password: string
}

interface State {
    logged: boolean,
    user: {
        username: '',
        password: ''
    },
}

const initialState:State = {
    logged: false,
    user: {
        username: '',
        password: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsernameForLogin: (state, action) => {
            state.user.username = action.payload;
        },
        setPasswordForLogin: (state, action) => {
            state.user.password = action.payload;
        },
        login: (state) => {
            const userExist = localStorage.getItem('user');
            if (userExist) {
                const user = JSON.parse(userExist);
                if (user.username === state.user.username && user.password === state.user.password) {
                    state.logged = true;
                    window.location.reload();
                    console.log(user);
                } else {
                    console.log('incorrect email or password');
                }
            } else {
                console.log('user doesn`t exsist');
            }
        },
        logout: (state) => {
            state.logged = false;
        },
    },
});

export default userSlice.reducer;

export const {
    login, logout, setPasswordForLogin, setUsernameForLogin,
} = userSlice.actions;
