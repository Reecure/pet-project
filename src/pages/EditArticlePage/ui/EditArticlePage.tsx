import { useTranslation } from 'react-i18next';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditArticlePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { getArticleById } from '@/enteties/Article/model/services/getArticleById';
import { ArticleAllProps, ArticleLoadig } from '@/enteties/Article/model/selectors/articleSelector';
import { Loader } from '@/shared/ui/Loader';
import ArticlesAddHeader from '@/features/CRUDArticle/ui/ArticlesAddHeader/ArticlesAddHeader';
import {
    setArticleBlocks,
    setArticlePreviewImg,
    setArticleSubTitle,
    setArticleTitle,
} from '@/features/CRUDArticle/model/slices/addArticleSlice';
import MainContentBlocks from '@/features/CRUDArticle/ui/MainContentBlocks/MainContentBlocks';
import { ArticleBlocks } from '@/enteties/Article/model/types/article';
import { getCreateFields } from '@/features/CRUDArticle/model/selectors/getCreateArticle';
import { updateArticle } from '@/features/CRUDArticle/model/services/updateArticle';
import { Button } from '@/shared/ui/Button';
import { Notify } from '@/shared/ui/Notify';

interface Props {
}

const EditArticlePage: FC<Props> = () => {
    const { t } = useTranslation();

    const [blocks, setBlocks] = useState<ArticleBlocks[]>([]);
    const [notifyOpen, setNotifyOpen] = useState(false);

    const article = useAppSelector(ArticleAllProps);
    const { blocks: blockS } = useAppSelector(getCreateFields);
    const isLoading = useAppSelector(ArticleLoadig);

    const dispatch = useAppDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getArticleById(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(setArticleTitle(article.article?.title));
        dispatch(setArticleSubTitle(article.article?.subtitle));
        dispatch(setArticlePreviewImg(article.article?.img));
        dispatch(setArticleBlocks(article.article?.blocks));
    }, [dispatch, article]);

    useEffect(() => {
        if (blockS !== undefined) {
            setBlocks(blockS);
        }
    }, [blockS]);

    useEffect(() => {
        const notifyTimeout = setTimeout(() => {
            setNotifyOpen(false);
        }, 3000);

        return () => {
            clearTimeout(notifyTimeout);
        };
    }, [notifyOpen]);

    const updateHandler = () => {
        setNotifyOpen(true);
        dispatch(updateArticle(article.article.id));
    };

    if (isLoading) {
        return (
            <Loader />
        );
    }

    return (
        <div className={classNames(cls.EditArticlePage, {}, [])}>
            <Button disabled={notifyOpen} onClick={updateHandler}>Update</Button>
            <ArticlesAddHeader
                articleEditTypes={article.article?.type}
            />
            <MainContentBlocks blocks={blocks} setBlocks={setBlocks} />
            <Notify open={notifyOpen}>
                Article update success
            </Notify>
        </div>
    );
};
export default EditArticlePage;
