import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IComment } from '@/enteties/Comment/model/types/comment';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

export const getCommentsByArticleId = createAsyncThunk('comments/getCommentsByArticleId', async (articleId: string) => {
    try {
        const res = await axios.get<IComment[]>('http://localhost:8000/comments', {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
            params: {
                articleId,
                _expand: 'user',
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
