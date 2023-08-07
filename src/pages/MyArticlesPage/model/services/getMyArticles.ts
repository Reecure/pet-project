import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';
import {
    myArticlePageSelector,
    myArticlesLimitSelector,
    myArticlesQuerySelector,
} from '@/pages/MyArticlesPage/model/selectors/myArticlesSelectors';

export const getAllMyArticles = createAsyncThunk('articles/getAllArticles', async (id: string, thunkApi: any) => {
    const { getState } = thunkApi;

    const pageState = myArticlePageSelector(getState());
    const limitState = myArticlesLimitSelector(getState());
    const query = myArticlesQuerySelector(getState());

    try {
        const params: any = {
            _page: pageState,
            _limit: limitState,
            q: query,
        };
        const res = await axios.get(`https://production-project-server-psi-ivory.vercel.app/articles?userId=${id}`, {
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
