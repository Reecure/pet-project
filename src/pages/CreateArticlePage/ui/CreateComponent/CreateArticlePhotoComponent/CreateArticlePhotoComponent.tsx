import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import React, { FC, useState } from 'react';
import { Input, ThemeInput } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { ArticleBlocks, BlockTypes, ImageBlock } from 'enteties/Article/model/types/article';
import { Button } from '@/shared/ui/Button';
import Image from '@/shared/ui/Image/Image';
import Stack, { StackPosition } from '@/shared/ui/Stack/ui/Stack';
import cls from './CreateArticlePhotoComponent.module.scss';

interface Props {
    blockId: string
    blocks: ArticleBlocks[]
    setBlocks: (block: any) => void
}

const CreateArticlePhotoComponent: FC<Props> = ({ blockId, blocks, setBlocks }) => {
    const { t } = useTranslation();
    const [title, setTitle] = useState('');
    const [src, setSrc] = useState('');

    const updateBlock = (updatedProps: Partial<ImageBlock>) => {
        const updatedBlock: ImageBlock = {
            id: blockId,
            src,
            title,
            type: BlockTypes.IMAGE,
            ...updatedProps,
        };

        const updatedBlocks = blocks.map((item) => {
            if (item.id === blockId) {
                return updatedBlock;
            }
            return item;
        });

        setBlocks(updatedBlocks);
    };

    const onSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSrc = e.currentTarget.value;
        setSrc(updatedSrc);
        updateBlock({ src: updatedSrc });
    };

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTitle = e.currentTarget.value;
        setTitle(updatedTitle);
        updateBlock({ title: updatedTitle });
    };

    const onDeleteBlockHandler = (blockId: string) => {
        const updatedBlocks = blocks.filter((block) => block.id !== blockId);
        setBlocks(updatedBlocks);
    };

    return (
        <div className={classNames(cls.CreateArticlePhotoComponent, {}, [])}>
            <Stack className={cls.titleWrapper}>
                <Text title={t('Photo Block')} />
                <Button onClick={() => onDeleteBlockHandler(blockId)}>X</Button>
            </Stack>
            <Stack childrenPosition={StackPosition.CENTER}>
                <Image src={src} width={400} height={300} />
            </Stack>
            <Stack>

                {t('src')}
                :
                <Input onChange={onSrcChange} value={src} theme={ThemeInput.OUTLINE} />
            </Stack>
            <Stack>
                {t('title')}
                :
                <Input onChange={onTitleChange} value={title} theme={ThemeInput.OUTLINE} />
            </Stack>
        </div>
    );
};

export default CreateArticlePhotoComponent;
