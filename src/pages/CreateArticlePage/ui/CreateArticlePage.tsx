import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { Button } from '@/shared/ui/Button';
import { ArticleBlocks, BlockTypes } from 'enteties/Article/model/types/article';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Modal } from '@/widgets/Modal';
import { ArticleDetails } from 'enteties/Article';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import Stack from '@/shared/ui/Stack/ui/Stack';
import cls from './CreateArticlePage.module.scss';
import CreateArticleTextComponent from './CreateComponent/CreateArticleTextComponent/CreateArticleTextComponent';
import CreateArticleCodeComponent from './CreateComponent/CreateArticleCodeComponent/CreateArticleCodeComponent';
import CreateArticlePhotoComponent from './CreateComponent/CreateArticlePhotoComponent/CreateArticlePhotoComponent';
import { addArticle } from '../model/services/addArticle';
import { setArticleBlocks } from '../model/slice/addArticleSlice';
import { getCreateFields } from '../model/selectors/getCreateArticle';
import ArticlesAddBlokButtons from './CreateComponent/ArticlesAddBlokButtons/ArticlesAddBlokButtons';
import ArticlesAddHeader from './CreateComponent/ArticlesAddHeader/ArticlesAddHeader';

interface Props {
}

const CreateArticlePage: FC<Props> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const fields = useAppSelector(getCreateFields);
    const user = useAppSelector(userDataSelector);
    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const [blocks, setBlocks] = useState<ArticleBlocks[]>([]);

    const sendArticleHandler = useCallback(
        () => {
            dispatch(addArticle(fields));
        },
        [dispatch, fields],
    );

    const PreviewArticleHandler = useCallback(() => {
        setPreviewOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        dispatch(setArticleBlocks(blocks));
    }, [dispatch, blocks]);

    const blockTypeRender = (blockType: BlockTypes, block?: any) => {
        switch (blockType) {
        case BlockTypes.TEXT:
            return <CreateArticleTextComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;
        case BlockTypes.CODE:
            return <CreateArticleCodeComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;
        case BlockTypes.IMAGE:
            return <CreateArticlePhotoComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;

        default:
            return null;
        }
    };

    const memoBlocks = useMemo(() => blocks.map((item) => <div>{blockTypeRender(item.type, item)}</div>), [blocks]);

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
                <ArticlesAddHeader />
                <div className={classNames(cls.CreateArticleMain, {}, [])}>
                    <div className={cls.blocksWrapper}>
                        {
                            memoBlocks
                        }
                    </div>
                    <div className={cls.articlesAddBlokButtonsWrapper}>
                        <ArticlesAddBlokButtons blocks={blocks} setBlocks={setBlocks} />
                    </div>

                </div>
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
