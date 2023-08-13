import {useTranslation} from 'react-i18next';
import {FC, useEffect, useRef} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './MainContent.module.scss';
import {Text} from '@/shared/ui/Text';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {
    recommendationArticleLoadingsSelector,
    recommendationArticlesSelector,
} from '../../model/selectors/RecommendationArticles';
import ArticleSmallComponent from '@/shared/ui/ArticleSmallComponent/ArticleSmallComponent';
import {getRecommendationArticles} from '@/pages/MainPage/model/services/getRecommendationArticles';
import useMouseWheelScroll from '@/shared/lib/hooks/useMouseWheel/useMouseWheel';
import {FontWeight, TextSizes} from '@/shared/ui/Text/model/types';
import {Skeleton} from '@/shared/ui/Skeleton';
import {userDataSelector} from "@/enteties/User";

interface Props {
}

const MainContent: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const recommendations = useAppSelector(recommendationArticlesSelector);
    const loading = useAppSelector(recommendationArticleLoadingsSelector);
    const isLogged = useAppSelector(userDataSelector)

    const wrapperRef = useRef(null);

    useMouseWheelScroll(wrapperRef);

    useEffect(() => {
        dispatch(getRecommendationArticles());
    }, [dispatch]);

    return (
        <>
            {
                isLogged ? <div className={classNames(cls.MainContent, {}, [])}>
                    <Text text="New Articles" fontWeight={FontWeight.FONTBOLD} textSize={TextSizes.TEXT2XL}/>
                    {
                        loading ? (
                            <div className={cls.articlesWraper} ref={wrapperRef}>
                                {
                                    Array(3).fill(null).map((item) => (
                                        <Skeleton height={200} width={300}/>
                                    ))

                                }
                            </div>
                        ) : (
                            <div className={cls.articlesWraper} ref={wrapperRef}>
                                {
                                    recommendations !== undefined ?
                                        recommendations.map((article, i) => {
                                            return <div key={i}>
                                                <ArticleSmallComponent article={article}/>
                                            </div>
                                        }) : <Text text={'Server error'} haveError={true} textSize={TextSizes.TEXT2XL}
                                                   fontWeight={FontWeight.FONTBOLD}></Text>


                                }
                            </div>
                        )
                    }
                </div> : <></>
            }

        </>
    );
};
export default MainContent;
