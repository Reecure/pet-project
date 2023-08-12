import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    myArticlePageSelector,
    myArticlesLimitSelector,
    myArticlesQuerySelector,
} from '@/pages/MyArticlesPage/model/selectors/myArticlesSelectors';
import fetchData from "@/shared/helpers/ApiHelper";
import {RootState} from "@/app/providers/ReduxProvider/config/store";
import {Article} from "@/enteties/Article/model/types/article";

interface ThunkConfig {
    state: RootState;
}

export const getAllMyArticles = createAsyncThunk<Article[], string, ThunkConfig>('articles/getAllArticles', async (id, thunkApi) => {
    const {getState, rejectWithValue} = thunkApi;

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
        return rejectWithValue(error.response.data);
    }
});
