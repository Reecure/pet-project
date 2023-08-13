import {createEntityAdapter, createSlice, EntityState, PayloadAction,} from '@reduxjs/toolkit';
import {Article, ArticleTypes} from '@/enteties/Article/model/types/article';
import {RootState} from '@/app/providers/ReduxProvider/config/store';
import {getAllArticles} from '../services/getArticles';

export enum viewTypes {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export enum OrderType {
    NONE = '',
    ASC = 'asc',
    DESC = 'desc'
}

export enum sortFields {
    NONE = '',
    VIEWS = 'views'
}

interface Props extends EntityState<Article> {
    error?: string,
    loading?: boolean,
    // pagination
    haveMore: boolean
    sortByField: sortFields,
    types: ArticleTypes[],
    order: OrderType,
    page: number,
    limit: number,
    q: string,
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
    sortByField: sortFields.NONE,
    order: OrderType.NONE,
    types: [],
    q: '',
    page: 1,
    limit: 15,
    viewsType: viewTypes.SMALL,
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setViewType: (state, action: PayloadAction<viewTypes>) => {
            state.viewsType = action.payload;
            state.limit = action.payload === viewTypes.BIG ? 6 : 15;
        },
        setNextPage: (state) => {
            state.page += 1;
        },
        setPrevPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
        resetPage: (state) => {
            state.page = 1;
        },
        setSortByOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload;
        },
        setSortByField: (state, action: PayloadAction<sortFields>) => {
            state.sortByField = action.payload;
        },
        setQueryString: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        setSortByType: (state, action: PayloadAction<ArticleTypes>) => {
            if (state.types.indexOf(action.payload) === -1) {
                state.types.push(action.payload);
            } else {
                state.types = state.types.filter((item) => item !== action.payload);
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

export const {
    setViewType, setNextPage, setQueryString, setPrevPage, setSortByOrder, setSortByField, resetPage, setSortByType,
} = articlesSlice.actions;
