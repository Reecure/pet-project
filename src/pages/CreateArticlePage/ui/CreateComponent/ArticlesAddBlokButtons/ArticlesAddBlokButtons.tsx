import { useTranslation } from 'react-i18next';
import { FC, useCallback } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleBlocks, BlockTypes } from '@/enteties/Article/model/types/article';
import { Button } from '@/shared/ui/Button';
import cls from './ArticlesAddBlokButtons.module.scss';

interface Props {
    blocks: ArticleBlocks[];
    setBlocks: (block: any) => void;
}

const ArticlesAddBlokButtons: FC<Props> = ({ blocks, setBlocks }) => {
    const { t } = useTranslation();

    const onAddTextBlockHandler = useCallback(() => {
        setBlocks((prevBlocks: any) => {
            const newBlock: ArticleBlocks = {
                id: nanoid(),
                type: BlockTypes.TEXT,
                title: '',
                paragraphs: [],
            };
            return [...prevBlocks, newBlock];
        });
    }, [setBlocks]);

    const onAddPhotoBlockHandler = useCallback(() => {
        setBlocks((prevBlocks: any) => {
            const newBlock: ArticleBlocks = {
                id: nanoid(),
                type: BlockTypes.IMAGE,
                src: '',
                title: '',
            };
            return [...prevBlocks, newBlock];
        });
    }, [setBlocks]);

    const onAddCodeBlockHandler = useCallback(() => {
        setBlocks((prevBlocks: any) => {
            const newBlock: ArticleBlocks = {
                id: nanoid(),
                type: BlockTypes.CODE,
                code: '',
            };
            return [...prevBlocks, newBlock];
        });
    }, [setBlocks]);

    return (
        <div className={classNames(cls.ArticlesAddBlokButtons, {}, [])}>
            <Button onClick={onAddTextBlockHandler}>{t('Create Text Block')}</Button>
            <Button onClick={onAddPhotoBlockHandler}>{t('Create Photo Block')}</Button>
            <Button onClick={onAddCodeBlockHandler}>{t('Create Code Block')}</Button>

        </div>
    );
};

export default ArticlesAddBlokButtons;
