import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchData} from "@/shared/helpers/ApiHelper";

export const getArticleById = createAsyncThunk('article/getArticleById', async (id: string, thunkAPI) => {
    try {
        const res: any = await fetchData(`articles?id=${id}`)

      
        return res[0];
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
