import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {USER_LOCALSTORAGE_KEY} from '@/shared/constants/localStorage';
import {Article} from '@/enteties/Article/model/types/article';
import {
    articleFieldSelector,
    articleOrderSelector,
    articlePageSelector,
    articleQuerySelector,
    articlesLimitSelector,
    articleTypesSelector,
} from '../selector/articlesSelector';

export const getAllArticles = createAsyncThunk<Article[], void>('articles/getAllArticles', async (_, thunkApi: any) => {
    const {getState} = thunkApi;

    const pageState = articlePageSelector(getState());
    const limitState = articlesLimitSelector(getState());
    const query = articleQuerySelector(getState());
    const sortState = articleFieldSelector(getState());
    const orderState = articleOrderSelector(getState());
    const typeState = articleTypesSelector(getState());

    try {
        const params: any = {
            _page: pageState,
            _limit: limitState,
            q: query,
        };

        if (typeState.length > 0) {
            typeState.forEach((type: any, index: number) => {
                params[`type_like[${index}]`] = type;
            });
        }
        if (sortState.length > 0) {
            params._sort = sortState;
        }
        if (orderState.length > 0) {
            params._order = orderState;
        }

        const res = await axios.get('https://production-project-server-psi-ivory.vercel.app/articles', {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
            params,
        });

        return res.data;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data)
    }
});
