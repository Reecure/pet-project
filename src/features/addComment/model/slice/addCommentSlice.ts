import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
};

const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setCommentText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export default addCommentSlice.reducer;

export const { setCommentText } = addCommentSlice.actions;
