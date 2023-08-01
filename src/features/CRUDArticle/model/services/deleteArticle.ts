import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

export const deleteArticle = createAsyncThunk('article/updateArticle', async (id: string) => {
    try {
        const res = await axios.delete(`http://localhost:8000/articles/${id}`, {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        if (!res.data) {
            throw new Error();
        }

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
