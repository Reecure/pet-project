import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { Article } from '@/enteties/Article/model/types/article';

interface ThunkConfig {
    state: RootState;
}

export const deleteArticle = createAsyncThunk<Article, string, ThunkConfig>('article/updateArticle', async (id, thunkAPI) => {
    try {
        const res = await fetchData(`articles/${id}`, { method: 'DELETE' });
        if (!res) {
            throw new Error();
        }

        return res;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
