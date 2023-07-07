import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Article } from 'enteties/Article/model/types/article';
import { Views } from 'shared';
import cls from './ArticleSmallComponent.module.scss';

interface Props {
    article: Article
}

const ArticleSmallComponent:FC<Props> = ({ article }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleSmallComponent, {}, [])}>
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
