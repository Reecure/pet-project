import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchData from "@/shared/helpers/ApiHelper";

export const getCommentsByArticleId = createAsyncThunk('comments/getCommentsByArticleId', async (articleId: string, thunkAPI) => {
    const {} = thunkAPI;

    try {
        return await fetchData('comments', {
            method: "GET", params: {
                articleId,
                _expand: 'user',
            },
        });
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
