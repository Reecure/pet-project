import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticleFields } from '@/enteties/Article/model/selectors/articleSelector';
import { IComment } from '@/enteties/Comment/model/types/comment';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import { getCommentsByArticleId } from '@/features/getComments/model/services/getCommentsByArticleId';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

export const addComment = createAsyncThunk<IComment, string>('comments/addComment', async (comment, thunkApi: any) => {
    const { getState, dispatch } = thunkApi;
    const userData = userDataSelector(getState());
    const article = ArticleFields(getState());
    try {
        const res = await axios.post('https://production-project-server-psi-ivory.vercel.app/comments', {
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
        dispatch(getCommentsByArticleId(article.id));
        return res.data;
    } catch (error) {
        console.log(error);
    }
});
