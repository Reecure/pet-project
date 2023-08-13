import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextBlock } from '@/enteties/Article/model/types/article';
import cls from './ArticleTextComponent.module.scss';
import { Text } from '@/shared/ui/Text';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
    block: TextBlock
}

const ArticleTextComponent: FC<Props> = ({ block }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [])}>
            <Text
                text={block?.title}
                textSize={TextSizes.TEXT2XL}
                className={cls.title}
                fontWeight={FontWeight.FONTBOLD}
            />
            <div>
                {block.paragraphs.map((paragraph) => (
                    <Text key={paragraph.id} text={paragraph.text} className={cls.articleParagraph} />
                ))}
            </div>
        </div>
    );
};

export default memo(ArticleTextComponent);
