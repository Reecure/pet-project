import {FC} from 'react';
import {Article, BlockTypes} from '@/enteties/Article/model/types/article';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import cls from './ArticleDetails.module.scss';
import ArticleTextComponent from '@/shared/ui/ArticleTextComponent/ArticleTextComponent';
import ArticleCodeComponent from '@/shared/ui/ArticleCodeComponent/ArticleCodeComponent';
import ArticleImageComponent from '@/shared/ui/ArticleImageComponent/ArticleImageComponent';

interface Props {
    article: Article;

}

const ArticleDetails: FC<Props> = ({article}) => {
    const blockTypeRender = (blockType: BlockTypes, block: any) => {
        switch (blockType) {
            case BlockTypes.TEXT:
                return <ArticleTextComponent block={block}/>;
            case BlockTypes.CODE:
                return <ArticleCodeComponent block={block}/>;
            case BlockTypes.IMAGE:
                return <ArticleImageComponent block={block}/>;

            default:
                return null;
        }
    };

    return (
        <>
            <div className={cls.titleWrapper}>
                <div className={cls.Avatar}>
                    <Avatar size={100} src={article.img}/>
                </div>
                <div>
                    <p className={cls.Title}>{article.title}</p>
                    <p className={cls.subTitle}>{article.subtitle}</p>
                </div>
            </div>
            <div className={cls.articleInfoWrapper}>
                <div className={cls.articleInfo}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                    <p>{article.createdAt}</p>
                </div>
                <div className={cls.articleInfo}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"

                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                strokeWidth="3"
                            />
                        </g>
                    </svg>
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
