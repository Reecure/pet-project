import {useTranslation} from 'react-i18next';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames';
import cls from './EditArticlePage.module.scss';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {ArticleAllProps, ArticleLoadig, getArticleById} from '@/enteties/Article';
import {Loader} from '@/shared/ui/Loader';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {ArticleForm, updateArticle} from '@/features/CRUDArticle';
import {Notify} from '@/shared/ui/Notify';

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
                {t('Article update success')}
            </Notify>
        </div>
    );
};
export default EditArticlePage;
