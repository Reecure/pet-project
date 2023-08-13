import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '@/shared/helpers/ApiHelper';

export const getRecommendationArticles = createAsyncThunk('article/getRecommendationsArticleById', async () => {
    try {
        const res = await fetchData('recommendations');

        return res;
    } catch (e) {
        console.log(e);
    }
});
