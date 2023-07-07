import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Article, BlockTypes } from 'enteties/Article/model/types/article';
import Avatar from 'shared/ui/Avatar/ui/Avatar';
import { AiFillEye, AiOutlineCalendar } from 'react-icons/ai';
import cls from './ArticleDetails.module.scss';
import ArticleTextComponent from '../ArticleTextComponent/ArticleTextComponent';
import ArticleCodeComponent from '../ArticleCodeComponent/ArticleCodeComponent';
import ArticleImageComponent from '../ArticleImageComponent/ArticleImageComponent';

interface Props {
    article: Article
}

const ArticleDetails:FC<Props> = ({ article }) => {
    const { t } = useTranslation();

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
                    <p className={cls.Title}>{article.title}</p>
                    <p className={cls.subTitle}>{article.subtitle}</p>
                </div>

            </div>
            <div className={cls.articleInfoWrapper}>
                <div className={cls.articleInfo}>
                    <AiOutlineCalendar className={cls.articleInfoIcon} />
                    <p>{article.createdAt}</p>
                </div>
                <div className={cls.articleInfo}>
                    <AiFillEye className={cls.articleInfoIcon} />
                    <p>{article.views}</p>
                </div>
            </div>

            {
                article.blocks.map((block) => <div key={block.id}>{blockTypeRender(block.type, block)}</div>)
            }

        </>

    );
};

export default ArticleDetails;
