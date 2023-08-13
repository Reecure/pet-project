import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleForSend } from '@/enteties/Article/model/types/article';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import fetchData from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';

interface ThunkConfig {
    state: RootState;
}

export const addArticle = createAsyncThunk<Article, ArticleForSend, ThunkConfig>('comments/addComment', async (article, thunkApi) => {
    const { getState } = thunkApi;

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear() % 100;
    const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().padStart(2, '0')}`;

    const userData = userDataSelector(getState());
    try {
        const res = await fetchData('articles', {
            method: 'POST',
            data: {
                ...article,
                createdAt: formattedDate,
                userId: userData.id,
            },
        });

        if (!res) {
            throw new Error();
        }
        return res;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
