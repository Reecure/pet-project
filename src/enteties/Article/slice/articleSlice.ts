import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../model/types/article';
import { getArticleById } from '../services/getArticleById';

interface Props {
    article: Article,
    error: string,
    loading: boolean

}

const initialState:Props = {
    article: undefined,
    error: '',
    loading: false,
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticleById.fulfilled, (state, action) => {
                state.article = action.payload;
                state.loading = false;
            });
        builder.addCase(getArticleById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getArticleById.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        });
    },
});

export default articleSlice.reducer;
