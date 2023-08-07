import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

export const getRecommendationArticles = createAsyncThunk('article/getRecommendationsArticleById', async () => {
    try {
        const res = await axios.get('https://production-project-server-psi-ivory.vercel.app/recommendations', {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        return res.data;
    } catch (e) {
        console.log(e);
    }
});
