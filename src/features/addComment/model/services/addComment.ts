import { createAsyncThunk } from '@reduxjs/toolkit';
import { ArticleFields } from '@/enteties/Article/model/selectors/articleSelector';
import { IComment } from '@/enteties/Comment/model/types/comment';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import { getCommentsByArticleId } from '@/features/getComments/model/services/getCommentsByArticleId';
import fetchData from '@/shared/helpers/ApiHelper';
import { RootState } from '@/app/providers/ReduxProvider/config/store';

interface ThunkConfig {
    state: RootState;
}

export const addComment = createAsyncThunk<IComment, string, ThunkConfig>('comments/addComment', async (comment, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const userData = userDataSelector(getState());
    const article = ArticleFields(getState());
    try {
        const res = await fetchData('comments', {
            method: 'POST',
            data: {
                text: comment,
                articleId: article.id,
                userId: userData.id,
            },
        });

        if (!res) {
            throw new Error();
        }
        dispatch(getCommentsByArticleId(article.id));
        return res;
    } catch (error) {
        console.log(error);
        return thunkApi.rejectWithValue(error.response.data);
    }
});
