import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    myArticlePageSelector,
    myArticlesLimitSelector,
    myArticlesQuerySelector,
} from '@/pages/MyArticlesPage/model/selectors/myArticlesSelectors';
import fetchData from "@/shared/helpers/ApiHelper";

export const getAllMyArticles = createAsyncThunk('articles/getAllArticles', async (id: string, thunkApi: any) => {
    const {getState} = thunkApi;

    const pageState = myArticlePageSelector(getState());
    const limitState = myArticlesLimitSelector(getState());
    const query = myArticlesQuerySelector(getState());

    try {
        const params: any = {
            _page: pageState,
            _limit: limitState,
            q: query,
        };

        const res = await fetchData(`articles?userId=${id}`, {params: params})


        return res;
    } catch (error) {
        console.log(error);
    }
});
