import {createSlice} from '@reduxjs/toolkit';
import {Article} from "@/enteties/Article/model/types/article";
import {getRecommendationArticles} from "@/pages/MainPage/model/services/getRecommendationArticles";


interface Props {
    article: Article[],
    error: string,
    loading: boolean

}

const initialState: Props = {
    article: undefined,
    error: '',
    loading: true,
};

const recommendationArticles = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecommendationArticles.fulfilled, (state, action) => {
                state.article = action.payload;
                state.loading = false;
            });
        builder.addCase(getRecommendationArticles.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRecommendationArticles.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        });
    },
});

export default recommendationArticles.reducer;
