import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { Article, ArticleForSend } from '@/enteties/Article/model/types/article';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import fetchData from '@/shared/helpers/ApiHelper';

interface ThunkConfig {
    state: RootState;
}

interface SendProps {
    id: string,
    article: ArticleForSend
}

export const updateArticle = createAsyncThunk<Article, SendProps, ThunkConfig>('article/updateArticle', async ({
    article,
    id,
}, thunkApi) => {
    const { getState, rejectWithValue } = thunkApi;

    const user = userDataSelector(getState());

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear() % 100;
    const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().padStart(2, '0')}`;

    try {
        const res = await fetchData(`articles/${id}`, {
            method: 'PUT',
            data: {
                userId: user.id,
                createdAt: formattedDate,
                ...article,
            },
        });

        if (!res) {
            throw new Error();
        }

        return res;
    } catch (error) {
        console.log(error);

        return rejectWithValue(error.response.data);
    }
});
