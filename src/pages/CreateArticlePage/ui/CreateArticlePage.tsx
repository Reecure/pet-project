import {useTranslation} from 'react-i18next';
import {FC, useCallback} from 'react';
import {ArticleForSend} from '@/enteties/Article/model/types/article';
import {useAppDispatch} from '@/app/providers/ReduxProvider/config/hooks';
import {addArticle, ArticleForm} from '@/features/CRUDArticle';

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const sendArticleHandler = useCallback(
        (values: ArticleForSend) => {
            dispatch(addArticle(values)).unwrap().then((res) => {
                console.log("not error")
            }).catch(error => {
                console.log('error')
            });
        },
        [dispatch],
    );

    return (
        <ArticleForm onSubmit={sendArticleHandler}/>
    );
};

export default CreateArticlePage;
