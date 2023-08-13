import { useTranslation } from 'react-i18next';
import {
    FC, useEffect, useRef, WheelEvent,
} from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './MainContent.module.scss';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import {
    recommendationArticleLoadingsSelector,
    recommendationArticlesSelector,
} from '../../model/selectors/RecommendationArticles';
import ArticleSmallComponent from '@/shared/ui/ArticleSmallComponent/ArticleSmallComponent';
import { getRecommendationArticles } from '@/pages/MainPage/model/services/getRecommendationArticles';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';
import { Skeleton } from '@/shared/ui/Skeleton';
import { userDataSelector } from '@/enteties/User';

interface Props {
}

const MainContent: FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const recommendations = useAppSelector(recommendationArticlesSelector);
    const loading = useAppSelector(recommendationArticleLoadingsSelector);
    const isLogged = useAppSelector(userDataSelector);

    const divRef = useRef(null);

    const handleMouseWheel = (e: WheelEvent<HTMLDivElement>) => {
        const scrollSpeed = 5;

        if (divRef.current) {
            divRef.current.scrollLeft += e.deltaY * scrollSpeed;
        }
    };

    useEffect(() => {
        dispatch(getRecommendationArticles());
    }, [dispatch, isLogged]);

    return (
        <section>
            {
                isLogged && (
                    <div className={classNames(cls.MainContent, {}, [])}>
                        <Text text={t('New Articles')} fontWeight={FontWeight.FONTBOLD} textSize={TextSizes.TEXT2XL} />
                        {
                            loading ? (
                                <div className={cls.articlesWraper} ref={divRef} onWheel={handleMouseWheel}>
                                    {
                                        Array(3).fill(null).map((item, i) => (
                                            <Skeleton key={i} height={200} width={300} />
                                        ))

                                    }
                                </div>
                            ) : (
                                <div className={cls.articlesWraper} ref={divRef} onWheel={handleMouseWheel}>
                                    {
                                        recommendations !== undefined
                                            ? recommendations.map((article, i) => (
                                                <div key={i}>
                                                    <ArticleSmallComponent article={article} />
                                                </div>
                                            )) : (
                                                <Text
                                                    text="Server error"
                                                    haveError={true}
                                                    textSize={TextSizes.TEXT2XL}
                                                    fontWeight={FontWeight.FONTBOLD}
                                                />
                                            )

                                    }
                                </div>
                            )
                        }
                    </div>
                )
            }

        </section>
    );
};
export default MainContent;
