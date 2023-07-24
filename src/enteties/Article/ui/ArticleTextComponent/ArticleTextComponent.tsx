import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { TextBlock } from 'enteties/Article/model/types/article';
import cls from './ArticleTextComponent.module.scss';

interface Props {
    block: TextBlock
}

const ArticleTextComponent:FC<Props> = ({ block }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [])}>
            <h3>{block?.title}</h3>
            <div>
                {block.paragraphs.map((paragraph) => <p className={cls.articleParagraph}>{paragraph.text}</p>)}

            </div>
        </div>
    );
};

export default memo(ArticleTextComponent);
