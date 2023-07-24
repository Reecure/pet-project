import { configureStore } from '@reduxjs/toolkit';
import counter from 'enteties/Counter/model/slice/counterSlice';
import user from 'enteties/User/model/slice/userSlice';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from 'enteties/Profile';
import { articleReducer } from 'enteties/Article';
import { commentsReducer } from '@/features/getComments';
import { addCommentReducer } from '@/features/addComment';
import { articlesReducer } from '@/pages/ArticlesPage';
import { addArticleReducer } from '@/pages/CreateArticlePage';

export const store = configureStore({
    reducer: {
        counter,
        user,
        loginReducer,
        profileReducer,
        articleReducer,
        commentsReducer,
        addCommentReducer,
        articlesReducer,
        addArticleReducer,

    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
