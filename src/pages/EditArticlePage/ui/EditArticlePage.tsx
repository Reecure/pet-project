import {useTranslation} from 'react-i18next';
import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames';
import cls from './EditArticlePage.module.scss';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {ArticleAllProps, ArticleLoading, getArticleById} from '@/enteties/Article';
import {Loader} from '@/shared/ui/Loader';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {ArticleForm, updateArticle} from '@/features/CRUDArticle';

interface Props {
}

const EditArticlePage: FC<Props> = () => {
    const {t} = useTranslation();

    const [notifyOpen, setNotifyOpen] = useState(false);
    const [notifySuccess, setNotifySuccess] = useState(false);
    const [serverError, setServerError] = useState(false);

    const article = useAppSelector(ArticleAllProps);
    const isLoading = useAppSelector(ArticleLoading);

    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(getArticleById(id)).unwrap().then((res) => {
            setServerError(false);
        }).catch((error) => {
            setServerError(true);
        });
    }, [dispatch, id]);

    useEffect(() => {
        const notifyTimeout = setTimeout(() => {
            setNotifyOpen(false);
            setNotifySuccess(false);
        }, 3000);

        return () => {
            clearTimeout(notifyTimeout);
        };
    }, [notifyOpen]);

    const updateHandler = (values: ArticleForSend) => {
        setNotifyOpen(true);
        dispatch(updateArticle({id: article.article.id, article: values}))
            .unwrap().then((res) => {
            setNotifySuccess(true);
            setServerError(false);
        }).catch((error) => {
            setServerError(true);
        });
    };

    if (isLoading) {
        return (
            <div className={cls.loaderWrapper}>
                <Loader/>
            </div>

        );
    }

    return (
        <div data-testid="editArticlePage" className={classNames(cls.EditArticlePage, {}, [])}>
            <ArticleForm
                submitError={serverError}
                article={article.article}
                loading={article.loading}
                onSubmit={updateHandler}
            />

        </div>
    );
};
export default EditArticlePage;
