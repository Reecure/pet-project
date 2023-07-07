import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';
import { Article } from 'enteties/Article/model/types/article';
import { articlePageSelector, articlesLimitSelector } from '../selector/articlesSelector';

export const getAllArticles = createAsyncThunk<Article[], void>('profile/getAllArticles', async (_, thunkApi:any) => {
    const { getState } = thunkApi;

    const pageState = articlePageSelector(getState());
    const limitState = articlesLimitSelector(getState());

    try {
        const res = await axios.get('http://localhost:8000/articles', {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
            params: {
                _page: pageState,
                _limit: limitState,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
