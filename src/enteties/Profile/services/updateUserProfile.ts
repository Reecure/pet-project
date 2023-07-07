import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'app/providers/ReduxProvider/config/store';
import { User } from 'enteties/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { profileFormSelector } from '../selectors/profileFormSelector';

interface ThunkConfig {
    state: RootState
}

export const updateUserProfile = createAsyncThunk<User, void, ThunkConfig>('profile/getUserProfile', async (_, thunkApi) => {
    const { getState } = thunkApi;

    const formData = profileFormSelector(getState());

    try {
        const res = await axios.put(`http://localhost:8000/profiles/${formData.id}`, formData, {
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
    }
});
