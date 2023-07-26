import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article } from '@/enteties/Article/model/types/article';
import { Views } from '@/shared/ui/Views';
import { getArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import cls from './ArticleSmallComponent.module.scss';

interface Props {
    article: Article
}

const ArticleSmallComponent: FC<Props> = ({ article }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const readMoreHandler = useCallback(
        () => {
            navigate(getArticleRoute(article.id));
        },
        [article.id, navigate],
    );
    return (
        <div onClick={readMoreHandler} className={classNames(cls.ArticleSmallComponent, {}, [])}>
            <div className={cls.ArticleSmallComponentHeader}>
                <img src={article?.img} alt={article?.title} />
                <p className={cls.createdAt}>{article?.createdAt}</p>
            </div>
            <div className={cls.ArticleSmallComponentFooter}>
                <div className={cls.articleInfo}>
                    {article?.type?.join(' ')}
                    <Views views={article?.views} />
                </div>
                <div>
                    {article?.title}
                </div>
            </div>
        </div>
    );
};

export default ArticleSmallComponent;
