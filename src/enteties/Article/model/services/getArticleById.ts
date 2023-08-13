import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { Article } from '@/enteties/Article/model/types/article';

interface ThunkConfig {
    state: RootState;
}

export const getArticleById = createAsyncThunk<Article, string, ThunkConfig>('article/getArticleById', async (id, thunkAPI) => {
    try {
        const res: any = await fetchData(`articles?id=${id}`);

        return res[0];
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
