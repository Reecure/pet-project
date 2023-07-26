import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import {
    myArticlePageSelector,
    myArticlesLimitSelector,
} from '@/pages/MyArticlesPage/model/selectors/myArticlesSelectors';

export const getAllMyArticles = createAsyncThunk('articles/getAllArticles', async (id: string, thunkApi: any) => {
    const { getState } = thunkApi;

    const pageState = myArticlePageSelector(getState());
    const limitState = myArticlesLimitSelector(getState());

    try {
        const params: any = {
            _page: pageState,
            _limit: limitState,
        };
        const res = await axios.get(`http://localhost:8000/articles?userId=${id}`, {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
            params,
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
