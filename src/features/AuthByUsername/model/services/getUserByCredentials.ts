import {createAsyncThunk} from '@reduxjs/toolkit';
import {USER_LOCALSTORAGE_KEY} from '@/shared/constants/localStorage';
import {User} from '@/enteties/User/model/types';
import {setAuthData} from '@/enteties/User/model/slice/userSlice';
import fetchData from "@/shared/helpers/ApiHelper";
import {RootState} from "@/app/providers/ReduxProvider/config/store";

interface ThunkConfig {
    state: RootState;
}

interface LoginByCredentials {
    username: string;
    password: string;
}

export const getUserByCredentials = createAsyncThunk<User, LoginByCredentials, ThunkConfig>('login/getUserByCredentials', async (authData, thunkApi) => {
    const {dispatch} = thunkApi;

    try {

        const res = await fetchData('login', {method: "POST", data: authData})


        if (!res) {
            throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res));
        dispatch(setAuthData(res));
        return res;
    } catch (error) {
        console.log(error);
    }
});
