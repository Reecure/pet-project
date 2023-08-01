import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

export const getArticleById = createAsyncThunk('article/getArticleById', async (id: string) => {
    try {
        const res = await axios.get(`http://localhost:8000/articles?id=${id}`, {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        return res.data[0];
    } catch (e) {
        console.log(e);
    }
});
