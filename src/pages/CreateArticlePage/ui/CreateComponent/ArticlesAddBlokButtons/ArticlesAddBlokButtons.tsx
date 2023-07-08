import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { ArticleBlocks, BlockTypes } from 'enteties/Article/model/types/article';
import { Button } from 'shared/ui/Button';
import cls from './ArticlesAddBlokButtons.module.scss';

interface Props {
    blocks: ArticleBlocks[];
    setBlocks: (blok: any) => void;
}

const ArticlesAddBlokButtons:FC<Props> = ({ blocks, setBlocks }) => {
    const { t } = useTranslation();

    const onAddTextBlockHandler = useCallback(
        () => {
            setBlocks([...blocks,
                {
                    id: nanoid(),
                    type: BlockTypes.TEXT,
                    title: 'Some Title',
                    paragraphs: [],
                }]);
        },
        [blocks, setBlocks],
    );

    const onAddPhotoBlockHandler = useCallback(
        () => {
            setBlocks([...blocks,
                {
                    id: nanoid(),
                    type: BlockTypes.IMAGE,
                    src: '',
                    title: '',
                }]);
        },
        [blocks, setBlocks],
    );
    const onAddCodeBlockHandler = useCallback(
        () => {
            setBlocks([...blocks,
                {
                    id: nanoid(),
                    type: BlockTypes.CODE,
                    code: '',
                }]);
        },
        [blocks, setBlocks],
    );

    return (
        <div className={classNames(cls.ArticlesAddBlokButtons, {}, [])}>
            <Button onClick={onAddTextBlockHandler}>{t('Create Text Block')}</Button>
            <Button onClick={onAddPhotoBlockHandler}>{t('Create Photo Block')}</Button>
            <Button onClick={onAddCodeBlockHandler}>{t('Create Code Block')}</Button>

        </div>
    );
};

export default ArticlesAddBlokButtons;
