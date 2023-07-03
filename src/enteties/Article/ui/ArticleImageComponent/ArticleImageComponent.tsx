import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { ImageBlock } from 'enteties/Article/model/types/article';
import cls from './ArticleImageComponent.module.scss';

interface Props{
    block:ImageBlock
}

const ArticleImageComponent:FC<Props> = ({ block }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageComponent, {}, [])}>
            <div className={cls.image}>
                <img src={block.src} alt="article" />
            </div>
            <p className={cls.ArticleImageComponentTitle}>{block.title}</p>
        </div>
    );
};

export default memo(ArticleImageComponent);
