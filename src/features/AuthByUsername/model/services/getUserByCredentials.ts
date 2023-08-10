import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { User } from '@/enteties/User/model/types';
import { setAuthData } from '@/enteties/User/model/slice/userSlice';

interface LoginByCredentials {
    username: string;
    password: string;
}

export const getUserByCredentials = createAsyncThunk<User, LoginByCredentials>('login/getUserByCredentials', async (authData, thunkApi) => {
    const { dispatch } = thunkApi;

    try {
        const res = await axios.post('https://production-project-server-psi-ivory.vercel.app/login', authData);

        if (!res.data) {
            throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
        dispatch(setAuthData(res.data));
        return res.data;
    } catch (error) {
        console.log(error);
    }
});
