import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './MainContent.module.scss'
import {FC, useEffect} from 'react';
import {Text} from "@/shared/ui/Text";
import {useAppDispatch, useAppSelector} from "@/app/providers/ReduxProvider/config/hooks";
import {
    recommendationArticleLoadingsSelector,
    recommendationArticlesSelector
} from "@/pages/MainPage/model/selectors/RecommendationArticles";
import {Loader} from "@/shared/ui/Loader";
import ArticleSmallComponent
    from "@/pages/ArticlesPage/ui/ArticlesComponents/ArticleSmallComponent/ArticleSmallComponent";
import {getRecommendationArticles} from "@/pages/MainPage/model/services/getRecommendationArticles";

interface Props {
}

const MainContent: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch()

    const recommendations = useAppSelector(recommendationArticlesSelector)
    const loading = useAppSelector(recommendationArticleLoadingsSelector)

    useEffect(() => {
        dispatch(getRecommendationArticles())
    }, [dispatch])

    if (loading) {
        return (
            <div className={classNames(cls.MainContent, {}, [])}>
                <Text title={'New Articles'}/>
                <Loader/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.MainContent, {}, [])}>
            <Text title={'New Articles'}/>
            <div className={cls.articlesWraper}>
                {
                    recommendations.map(article => {
                        return (<ArticleSmallComponent key={article.id} article={article}/>)
                    })
                }
            </div>

        </div>
    );
};
export default MainContent;