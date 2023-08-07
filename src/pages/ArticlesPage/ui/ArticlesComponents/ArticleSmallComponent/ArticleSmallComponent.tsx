import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Article } from '@/enteties/Article/model/types/article';
import { Views } from '@/shared/ui/Views';
import { getArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import cls from './ArticleSmallComponent.module.scss';
import { AppLink } from '@/shared/ui/AppLink';

interface Props {
    article: Article
}

const ArticleSmallComponent: FC<Props> = ({ article }) => {
    const { t } = useTranslation();

    return (
        <AppLink to={getArticleRoute(article.id)} className={classNames(cls.ArticleSmallComponent, {}, [])}>
            <div className={cls.ArticleSmallComponentHeader}>
                <img src={article?.img} alt={article?.title} />
                <p className={cls.createdAt}>{article?.createdAt}</p>
            </div>
            <div className={cls.ArticleSmallComponentFooter}>
                <div className={cls.articleInfo}>
                    {article?.type?.slice(0, 2).join(' ')}
                    <Views views={article?.views} />
                </div>
                <div>
                    {article?.title}
                </div>
            </div>
        </AppLink>
    );
};

export default ArticleSmallComponent;
