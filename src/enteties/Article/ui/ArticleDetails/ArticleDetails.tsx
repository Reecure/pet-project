import { FC } from 'react';
import { AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai';
import { Article, BlockTypes } from '@/enteties/Article/model/types/article';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import cls from './ArticleDetails.module.scss';
import ArticleTextComponent from '@/shared/ui/ArticleTextComponent/ArticleTextComponent';
import ArticleCodeComponent from '@/shared/ui/ArticleCodeComponent/ArticleCodeComponent';
import ArticleImageComponent from '@/shared/ui/ArticleImageComponent/ArticleImageComponent';
import { Text } from '@/shared/ui/Text';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
    article: Article;

}

const ArticleDetails: FC<Props> = ({ article }) => {
    const blockTypeRender = (blockType: BlockTypes, block: any) => {
        switch (blockType) {
        case BlockTypes.TEXT:
            return <ArticleTextComponent block={block} />;
        case BlockTypes.CODE:
            return <ArticleCodeComponent block={block} />;
        case BlockTypes.IMAGE:
            return <ArticleImageComponent block={block} />;

        default:
            return null;
        }
    };

    return (
        <>
            <div className={cls.titleWrapper}>
                <div className={cls.Avatar}>
                    <Avatar size={100} src={article.img} />
                </div>
                <div>
                    <Text text={article.title} textSize={TextSizes.TEXT3XL} fontWeight={FontWeight.FONTBOLD} />
                    <Text text={article.subtitle} textSize={TextSizes.TEXTLG} fontWeight={FontWeight.FONTMEDIUM} />
                </div>
            </div>
            <div className={cls.articleInfoWrapper}>
                <div className={cls.articleInfo}>
                    <AiOutlineCalendar />
                    <p>{article.createdAt}</p>
                </div>
                <div className={cls.articleInfo}>
                    <AiOutlineEye />
                    <p>{article.views}</p>
                </div>
            </div>

            {article.blocks.map((block) => (
                <div key={block.id}>{blockTypeRender(block.type, block)}</div>
            ))}
        </>
    );
};

export default ArticleDetails;
