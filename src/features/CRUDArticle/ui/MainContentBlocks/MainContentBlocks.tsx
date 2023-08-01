import { useTranslation } from 'react-i18next';
import { FC, useEffect, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainContentBlocks.module.scss';
import { ArticleBlocks, BlockTypes } from '@/enteties/Article/model/types/article';
import { setArticleBlocks } from '@/features/CRUDArticle/model/slices/addArticleSlice';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import CreateArticleTextComponent
    from '@/features/CRUDArticle/ui/CreateArticleTextComponent/CreateArticleTextComponent';
import CreateArticleCodeComponent
    from '@/features/CRUDArticle/ui/CreateArticleCodeComponent/CreateArticleCodeComponent';
import CreateArticlePhotoComponent
    from '@/features/CRUDArticle/ui/CreateArticlePhotoComponent/CreateArticlePhotoComponent';
import ArticlesAddBlokButtons from '@/features/CRUDArticle/ui/ArticlesAddBlokButtons/ArticlesAddBlokButtons';

interface Props {
    blocks: ArticleBlocks[];
    setBlocks: any;
}

const MainContentBlocks: FC<Props> = ({ blocks, setBlocks }) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

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

    const memoBlocks = useMemo(() => blocks.map((item) => (
        <div
            key={item.id}
        >
            {blockTypeRender(item.type, item)}
        </div>
    )), [blocks]);

    return (
        <div className={classNames(cls.MainContentBlocks, {}, [])}>
            <div className={cls.blocksWrapper}>
                {
                    memoBlocks
                }
            </div>

            <div className={cls.articlesAddBlokButtonsWrapper}>
                <ArticlesAddBlokButtons blocks={blocks} setBlocks={setBlocks} />
            </div>
        </div>
    );
};
export default MainContentBlocks;
