import { useTranslation } from 'react-i18next';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { ArticleForSend } from '@/enteties/Article/model/types/article';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import { addArticle, ArticleForm } from '@/features/CRUDArticle';
import { Notify } from '@/shared/ui/Notify';

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const { t } = useTranslation();
    const [notifyOpen, setNotifyOpen] = useState(false);
    const [notifySuccess, setNotifySuccess] = useState(false);
    const [serverError, setServerError] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const notifyTimeout = setTimeout(() => {
            setNotifyOpen(false);
            setNotifySuccess(false);
        }, 3000);

        return () => {
            clearTimeout(notifyTimeout);
        };
    }, [notifyOpen]);

    const sendArticleHandler = useCallback(
        (values: ArticleForSend) => {
            dispatch(addArticle(values)).unwrap().then((res) => {
                setNotifyOpen(true);
                setNotifySuccess(true);
                setServerError(false);
            }).catch((error) => {
                setNotifyOpen(true);
                setServerError(true);
            });
        },
        [dispatch],
    );

    return (
        <div data-testid="articleForm">
            <ArticleForm onSubmit={sendArticleHandler} submitError={serverError} />
            <Notify open={notifyOpen} error={!notifySuccess}>
                {notifySuccess ? t('Article created success') : t('Article created failed')}
            </Notify>
        </div>

    );
};

export default CreateArticlePage;
