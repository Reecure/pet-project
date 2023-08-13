import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/enteties/Article/model/types/article';
import {
    articleFieldSelector,
    articleOrderSelector,
    articlePageSelector,
    articleQuerySelector,
    articlesLimitSelector,
    articleTypesSelector,
} from '../selector/articlesSelector';
import fetchData from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';

interface ThunkConfig {
    state: RootState;
}

export const getAllArticles = createAsyncThunk<Article[], void, ThunkConfig>('articles/getAllArticles', async (_, thunkApi) => {
    const { getState } = thunkApi;

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

        const res = await fetchData('articles', { params });

        return res;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
