import {
    EntityState, PayloadAction, createEntityAdapter, createSlice,
} from '@reduxjs/toolkit';
import { Article } from 'enteties/Article/model/types/article';
import { RootState } from 'app/providers/ReduxProvider/config/store';
import { getAllArticles } from '../services/getArticles';

export enum viewTypes {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

interface Props extends EntityState<Article> {
    error?: string,
    loading?: boolean,
    // pagination
    haveMore: boolean
    page: number,
    limit: number,
    viewsType?: viewTypes
}

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<RootState>(
    (state) => state.articlesReducer || articlesAdapter.getInitialState(),
);

const initialState = articlesAdapter.getInitialState<Props>({
    entities: {},
    ids: [],
    error: undefined,
    loading: false,

    // pagination
    haveMore: true,
    page: 1,
    limit: 6,
    viewsType: viewTypes.SMALL,
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setViewType: (state, action: PayloadAction<viewTypes>) => {
            state.viewsType = action.payload;
        },
        setNextPage: (state) => {
            state.page += 1;
        },
        setPrevPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllArticles.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllArticles.fulfilled, (state, action) => {
            state.loading = false;
            articlesAdapter.setAll(state, action.payload);
            state.haveMore = action.payload.length >= state.limit;
        });
        builder.addCase(getAllArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default articlesSlice.reducer;

export const { setViewType, setNextPage, setPrevPage } = articlesSlice.actions;
