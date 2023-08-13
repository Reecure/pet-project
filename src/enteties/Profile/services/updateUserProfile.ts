import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { User } from '@/enteties/User/model/types';
import fetchData from '@/shared/helpers/ApiHelper';

interface ThunkConfig {
    state: RootState;
}

export const updateUserProfile = createAsyncThunk<User, User, ThunkConfig>('profile/getUserProfile', async (form, thunkApi) => {
    try {
        const res: any = await fetchData(`profiles/${form.id}`, { method: 'PUT', data: form });

        if (!res) {
            throw new Error();
        }

        return res;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
