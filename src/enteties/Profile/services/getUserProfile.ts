import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { User } from '@/enteties/User/model/types';

interface ThunkConfig {
    state: RootState;
}

export const getUserProfile = createAsyncThunk<User, string, ThunkConfig>('profile/getUserProfile', async (id, thunkApi) => {
    try {
        const res: any = await fetchData(`profiles?id=${id}`);

        return res[0];
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
