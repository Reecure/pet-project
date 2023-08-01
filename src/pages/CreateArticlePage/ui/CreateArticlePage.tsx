import {useTranslation} from 'react-i18next';
import {FC, useCallback,} from 'react';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {useAppDispatch} from '@/app/providers/ReduxProvider/config/hooks';
import {addArticle} from '@/features/CRUDArticle/model/services/addArticle';
import ArticleForm from "@/features/CRUDArticle/ui/ArticleForm/ArticleForm";

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const sendArticleHandler = useCallback(
        (values: ArticleForSend) => {
            dispatch(addArticle(values));

        },
        [dispatch],
    );


    return (
        <>
            <ArticleForm onSubmit={sendArticleHandler}/>
        </>
    );
};

export default CreateArticlePage;
