import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchData from "@/shared/helpers/ApiHelper";

export const deleteArticle = createAsyncThunk('article/updateArticle', async (id: string, thunkAPI) => {
    try {
        const res = await fetchData(`articles/${id}`, {method: "DELETE"})
        if (!res) {
            throw new Error();
        }

        return res;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
