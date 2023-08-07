import { configureStore } from '@reduxjs/toolkit';
import user from '@/enteties/User/model/slice/userSlice';
import { loginReducer } from '@/features/AuthByUsername';
import { profileReducer } from '@/enteties/Profile';
import { articleReducer } from '@/enteties/Article';
import { commentsReducer } from '@/features/getComments';
import { articlesReducer } from '@/pages/ArticlesPage';
import { myArticlesReducer } from '@/pages/MyArticlesPage';
import { RecommendationArticleReducer } from '@/pages/MainPage';

export const store = configureStore({
    reducer: {
        user,
        loginReducer,
        profileReducer,
        articleReducer,
        commentsReducer,
        articlesReducer,
        myArticlesReducer,
        RecommendationArticleReducer,

    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
