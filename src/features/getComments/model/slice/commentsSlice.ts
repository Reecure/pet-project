import { EntityState, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IComment } from 'enteties/Comment/model/types/comment';
import { RootState } from 'app/providers/ReduxProvider/config/store';
import { getCommentsByArticleId } from '../services/getCommentsByArticleId';

interface Props extends EntityState<IComment> {
    error?: string,
    loading?: boolean
}

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
    (state) => state.commentsReducer || commentsAdapter.getInitialState(),
);

const commentsSlice = createSlice({
    name: 'comment',
    initialState: commentsAdapter.getInitialState<Props>({
        entities: {},
        ids: [],
        error: undefined,
        loading: false,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommentsByArticleId.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCommentsByArticleId.fulfilled, (state, action) => {
            state.loading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(getCommentsByArticleId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default commentsSlice.reducer;
