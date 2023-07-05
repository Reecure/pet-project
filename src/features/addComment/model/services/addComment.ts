import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticleFields } from 'enteties/Article/selectors/articleSelector';
import { IComment } from 'enteties/Comment/model/types/comment';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

export const addComment = createAsyncThunk<IComment, string>('comments/addComment', async (comment, thunkApi:any) => {
    const { getState } = thunkApi;
    const userData = userDataSelector(getState());
    const article = ArticleFields(getState());
    try {
        const res = await axios.post('http://localhost:8000/comments', {
            text: comment,
            articleId: article.id,
            userId: userData.id,

        }, {
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
