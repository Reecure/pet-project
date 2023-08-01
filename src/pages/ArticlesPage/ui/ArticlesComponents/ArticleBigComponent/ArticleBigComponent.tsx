import { useTranslation } from 'react-i18next';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article, BlockTypes } from '@/enteties/Article/model/types/article';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import { getArticleRoute } from '@/shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Views } from '@/shared/ui/Views';
import cls from './ArticleBigComponent.module.scss';

interface Props {
    article: Article
}

const ArticleBigComponent: FC<Props> = ({ article }) => {
    const { t } = useTranslation();

    const [paragraph, setParagraph] = useState('');

    const navigate = useNavigate();

    const readMoreHandler = useCallback(
        () => {
            navigate(getArticleRoute(article.id));
        },
        [article.id, navigate],
    );

    useEffect(() => {
        const selectParagraph = (artic: Article) => artic?.blocks?.find((block) => {
            if (block.type === BlockTypes.TEXT) {
                setParagraph(block.paragraphs[0].text);
            }
        });
        console.log(paragraph);
        selectParagraph(article);
    }, [article]);

    return (
        <div className={classNames(cls.ArticleBigComponent, {}, [])}>
            <div className={cls.ArticleBigComponentHeader}>
                <div className={cls.userInfoWrapper}>
                    <div className={cls.userInfo}>
                        <Avatar size={25} src={article.user?.avatar} />
                        <p>{article.user?.username}</p>
                    </div>
                    <p>{article?.createdAt}</p>
                </div>
                <div className={cls.articleInfo}>
                    <p className={cls.articleTitle}>{article?.subtitle}</p>
                    <div className={cls.articleTypes}>{article?.type?.join(' ')}</div>
                </div>
            </div>
            <div className={cls.imageWrapper}>
                <img style={{ height: 200, objectFit: 'cover' }} src={article?.img} alt="scs" />

            </div>
            <div className={cls.ArticleBigComponentMain}>
                <p>
                    {
                        paragraph
                    }
                </p>
            </div>
            <div className={cls.ArticleBigComponentFooter}>
                <Button onClick={readMoreHandler} theme={ThemeButton.OUTLINE}>{t('Read more')}</Button>
                <Views views={article?.views} />
            </div>
        </div>
    );
};

export default ArticleBigComponent;
