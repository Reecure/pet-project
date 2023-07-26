import { useTranslation } from 'react-i18next';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { ArticleBlocks } from '@/enteties/Article/model/types/article';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Modal } from '@/widgets/Modal';
import { ArticleDetails } from '@/enteties/Article';
import { userDataSelector } from '@/enteties/User/model/selectors/userDataSelector';
import Stack from '@/shared/ui/Stack/ui/Stack';
import cls from './CreateArticlePage.module.scss';
import { addArticle } from '@/features/CRUDArticle/model/services/addArticle';
import { getCreateFields } from '@/features/CRUDArticle/model/selectors/getCreateArticle';
import ArticlesAddHeader from '@/features/CRUDArticle/ui/ArticlesAddHeader/ArticlesAddHeader';
import MainContentBlocks from '@/features/CRUDArticle/ui/MainContentBlocks/MainContentBlocks';
import {
    setArticlePreviewImg,
    setArticleSubTitle,
    setArticleTitle,
} from '@/features/CRUDArticle/model/slices/addArticleSlice';

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const { t } = useTranslation();

    const fields = useAppSelector(getCreateFields);
    const user = useAppSelector(userDataSelector);

    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const [blocks, setBlocks] = useState<ArticleBlocks[]>([]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setArticleTitle(''));
        dispatch(setArticlePreviewImg(''));
        dispatch(setArticleSubTitle(''));
    }, []);

    const sendArticleHandler = useCallback(
        () => {
            if (fields.title.length > 3 && fields.subtitle.length > 3) {
                dispatch(addArticle(fields));
            }
        },
        [dispatch, fields],
    );

    const PreviewArticleHandler = useCallback(() => {
        setPreviewOpen((prev) => !prev);
    }, []);

    return (
        <>
            <form className={classNames(cls.CreateArticlePage, {}, [])}>
                <div className={cls.buttonsWrapper}>
                    <Button
                        type="submit"
                        onClick={sendArticleHandler}
                        className={cls.sendButton}
                    >
                        {t('Send Article')}
                    </Button>
                    <Button onClick={PreviewArticleHandler}>{t('Preview Article')}</Button>
                </div>
                <ArticlesAddHeader articleEditTypes={[]} />
                <MainContentBlocks blocks={blocks} setBlocks={setBlocks} />
            </form>
            <Modal isOpen={isPreviewOpen} setIsOpen={PreviewArticleHandler} className={cls.modalWrapper}>
                <Stack className={cls.previewArticle}>
                    <ArticleDetails article={{
                        ...fields, createdAt: '00:00:00', id: '1', user,
                    }}
                    />
                </Stack>
            </Modal>
        </>
    );
};

export default CreateArticlePage;
