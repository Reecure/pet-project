import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchData} from "@/shared/helpers/ApiHelper";

export const getUserProfile = createAsyncThunk('profile/getUserProfile', async (id: string, thunkApi) => {
    try {
        const res: any = await fetchData(`profiles?id=${id}`)

        return res[0];
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
