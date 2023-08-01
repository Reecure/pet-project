import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { getCreateFields } from '@/features/CRUDArticle/model/selectors/getCreateArticle';
import { Article } from '@/enteties/Article/model/types/article';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';

interface ThunkConfig {
    state: RootState;
}

export const updateArticle = createAsyncThunk<Article, any, ThunkConfig>('article/updateArticle', async (id: string, thunkApi) => {
    const { getState } = thunkApi;

    const formData = getCreateFields(getState());
    const user = userDataSelector(getState());

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear() % 100;
    const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().padStart(2, '0')}`;

    try {
        const res = await axios.put(`http://localhost:8000/articles/${id}`, {
            userId: user.id,
            createdAt: formattedDate,
            ...formData,
        }, {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        if (!res.data) {
            throw new Error();
        }

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
