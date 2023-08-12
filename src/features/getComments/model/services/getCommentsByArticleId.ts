import {createAsyncThunk} from '@reduxjs/toolkit';
import fetchData from "@/shared/helpers/ApiHelper";
import {RootState} from "@/app/providers/ReduxProvider/config/store";
import {IComment} from "@/enteties/Comment/model/types/comment";

interface ThunkConfig {
    state: RootState;
}

export const getCommentsByArticleId = createAsyncThunk<IComment[], string, ThunkConfig>('comments/getCommentsByArticleId', async (articleId, thunkAPI) => {
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
