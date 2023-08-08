import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Article, ArticleForSend} from '@/enteties/Article/model/types/article';
import {userDataSelector} from '@/enteties/User/model/selectors/userDataSelector';
import {USER_LOCALSTORAGE_KEY} from '@/shared/constants/localStorage';

export const addArticle = createAsyncThunk<Article, ArticleForSend>('comments/addComment', async (article, thunkApi: any) => {
    const {getState} = thunkApi;

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear() % 100;
    const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString().padStart(2, '0')}`;

    const userData = userDataSelector(getState());
    try {
        const res = await axios.post('https://production-project-server-psi-ivory.vercel.app/articles', {
            ...article,
            createdAt: formattedDate,
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
        return thunkApi.rejectWithValue(error.response.data)
    }
});
