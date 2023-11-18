import { useTranslation } from 'react-i18next';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './EditArticlePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { ArticleAllProps, ArticleLoading, getArticleById } from '@/enteties/Article';
import { Loader } from '@/shared/ui/Loader';
import { ArticleForSend } from '@/enteties/Article/model/types/article';
import { ArticleForm, updateArticle } from '@/features/CRUDArticle';
import { Notify } from '@/shared/ui/Notify';
import ServerError from '@/widgets/ServerError/ServerError';

interface Props {
}

const EditArticlePage: FC<Props> = () => {
    const { t } = useTranslation();

    const [notifyOpen, setNotifyOpen] = useState(false);
    const [notifySuccess, setNotifySuccess] = useState(false);
    const [serverError, setServerError] = useState(false);

    const article = useAppSelector(ArticleAllProps);
    const isLoading = useAppSelector(ArticleLoading);

    const dispatch = useAppDispatch();

    const { id } = useParams();

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

    const updateHandler = async (values: ArticleForSend) => {
        await setNotifyOpen(true);
        await dispatch(updateArticle({ id: article.article.id, article: values }))
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
                <Loader />
            </div>

        );
    }

    return (
        <>
            <section data-testid="editArticlePage" className={classNames(cls.EditArticlePage, {}, [])}>
                {article.article !== undefined
                    ? (
                        <ArticleForm
                            submitError={serverError}
                            article={article.article}
                            loading={article.loading}
                            onSubmit={updateHandler}
                        />
                    ) : (<ServerError />)}
            </section>
            <Notify open={notifyOpen} error={!notifySuccess}>
                {notifySuccess ? t('Article update success') : t('Article update failed')}
            </Notify>
        </>

    );
};
export default EditArticlePage;
