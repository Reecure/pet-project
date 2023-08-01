import {useTranslation} from 'react-i18next';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './EditArticlePage.module.scss';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {getArticleById} from '@/enteties/Article/model/services/getArticleById';
import {ArticleAllProps, ArticleLoadig} from '@/enteties/Article/model/selectors/articleSelector';
import {Loader} from '@/shared/ui/Loader';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {updateArticle} from '@/features/CRUDArticle/model/services/updateArticle';
import {Notify} from '@/shared/ui/Notify';
import ArticleForm from "@/features/CRUDArticle/ui/ArticleForm/ArticleForm";

interface Props {
}

const EditArticlePage: FC<Props> = () => {
    const {t} = useTranslation();

    const [notifyOpen, setNotifyOpen] = useState(false);

    const article = useAppSelector(ArticleAllProps);
    const isLoading = useAppSelector(ArticleLoadig);

    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getArticleById(id));
    }, [dispatch, id]);

    useEffect(() => {
        const notifyTimeout = setTimeout(() => {
            setNotifyOpen(false);
        }, 3000);

        return () => {
            clearTimeout(notifyTimeout);
        };
    }, [notifyOpen]);

    const updateHandler = (values: ArticleForSend) => {
        setNotifyOpen(true);
        dispatch(updateArticle({id: article.article.id, article: values}));
    };

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <div className={classNames(cls.EditArticlePage, {}, [])}>
            <ArticleForm article={article.article} loading={article.loading} onSubmit={updateHandler}/>
            <Notify open={notifyOpen}>
                Article update success
            </Notify>
        </div>
    );
};
export default EditArticlePage;
