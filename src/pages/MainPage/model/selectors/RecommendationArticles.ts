import {RootState} from "@/app/providers/ReduxProvider/config/store";


export const recommendationArticlesSelector = (state: RootState) => state.RecommendationArticleReducer.article
export const recommendationArticleLoadingsSelector = (state: RootState) => state.RecommendationArticleReducer.loading