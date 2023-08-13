import {
    createEntityAdapter, createSlice, EntityState, PayloadAction,
} from '@reduxjs/toolkit';
import { Article } from '@/enteties/Article/model/types/article';
import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { getAllMyArticles } from '@/pages/MyArticlesPage/model/services/getMyArticles';

interface Props extends EntityState<Article> {
    error?: string,
    loading?: boolean,
    // pagination
    haveMore: boolean
    page: number,
    limit: number,
    query: string

}

const myArticlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getMyArticles = myArticlesAdapter.getSelectors<RootState>(
    (state) => state.myArticlesReducer || myArticlesAdapter.getInitialState(),
);

const initialState = myArticlesAdapter.getInitialState<Props>({
    entities: {},
    ids: [],
    error: undefined,
    loading: false,

    // pagination
    haveMore: true,
    page: 1,
    limit: 10,
    query: '',
});

const myArticlesSlice = createSlice({
    name: 'myArticles',
    initialState,
    reducers: {
        setNextPage: (state) => {
            state.page += 1;
        },
        setPrevPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        resetPage: (state) => {
            state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMyArticles.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllMyArticles.fulfilled, (state, action) => {
            state.loading = false;
            myArticlesAdapter.setAll(state, action.payload);
            state.haveMore = action.payload.length >= state.limit;
        });
        builder.addCase(getAllMyArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default myArticlesSlice.reducer;

export const {
    setNextPage, setSearchQuery, setPrevPage, resetPage,
} = myArticlesSlice.actions;
