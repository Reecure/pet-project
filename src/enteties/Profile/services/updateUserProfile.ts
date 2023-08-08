import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '@/app/providers/ReduxProvider/config/store';

import {USER_LOCALSTORAGE_KEY} from '@/shared/constants/localStorage';
import {User} from '@/enteties/User/model/types';

interface ThunkConfig {
    state: RootState;
}

export const updateUserProfile = createAsyncThunk<User, User, ThunkConfig>('profile/getUserProfile', async (form, thunkApi) => {
    try {

        const res = await axios.put(`http://localhost:8000/profiles/${form.id}`, form, {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        if (!res.data) {
            throw new Error();
        }

        return res.data;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data)
    }
});
