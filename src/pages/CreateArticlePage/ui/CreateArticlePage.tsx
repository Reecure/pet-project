import {useTranslation} from 'react-i18next';
import {FC, useCallback, useState} from 'react';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {useAppDispatch} from '@/app/providers/ReduxProvider/config/hooks';
import {addArticle, ArticleForm} from '@/features/CRUDArticle';

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const {t} = useTranslation();

    const [serverError, setServerError] = useState(false);

    const dispatch = useAppDispatch();

    const sendArticleHandler = useCallback(
        (values: ArticleForSend) => {
            dispatch(addArticle(values)).unwrap().then((res) => {
                setServerError(false);
            }).catch((error) => {
                setServerError(true);
            });
        },
        [dispatch],
    );

    return (
        <ArticleForm data-testid='articleForm' onSubmit={sendArticleHandler} submitError={serverError}/>
    );
};

export default CreateArticlePage;
