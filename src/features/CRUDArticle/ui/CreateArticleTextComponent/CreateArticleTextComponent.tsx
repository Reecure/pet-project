import { useTranslation } from 'react-i18next';
import React, { FC, useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input, ThemeInput } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { ArticleBlocks, BlockTypes, TextBlock } from '@/enteties/Article/model/types/article';
import cls from './CreateArticleTextComponent.module.scss';

interface Props {
    blockId: string
    blocks: ArticleBlocks[]
    setBlocks: (block: any) => void
}

interface Paragraph {
    id: string,
    text: string

}

const CreateArticleTextComponent: FC<Props> = ({ blockId, blocks, setBlocks }) => {
    const [paragraphs, setParagraphs] = useState<Paragraph[]>([{ id: nanoid(), text: '' }]);
    const [title, setTitle] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const initBlock = () => {
            const initedBlocks = blocks.map((block) => {
                if (block.id === blockId && block.type === BlockTypes.TEXT) {
                    setTitle(block.title);
                    setParagraphs(block.paragraphs);
                }
            });
            return initedBlocks;
        };
        initBlock();
    }, [paragraphs]);

    const updateBlock = (updatedProps: Partial<TextBlock>) => {
        const updatedBlock: TextBlock = {
            id: blockId,
            title,
            paragraphs,
            type: BlockTypes.TEXT,
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

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTitle = e.currentTarget.value;

        setTitle(updatedTitle);
        updateBlock({ title: updatedTitle });
    };

    const addParagraphHandler = () => {
        const paragraphId = nanoid();
        const upadateParagraphs = [...paragraphs, { id: paragraphId, text: '' }];
        setParagraphs(upadateParagraphs);
        updateBlock({ paragraphs: upadateParagraphs });
    };
    const deleteParagraphHandler = (id: string) => {
        const filteredParagraphs = paragraphs.filter((item) => item.id !== id);
        setParagraphs(filteredParagraphs);
        updateBlock({ paragraphs: filteredParagraphs });
    };

    const onParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>, paragraphId: string) => {
        const updatedParagraph: Paragraph = {
            id: paragraphId,
            text: e.currentTarget.value,
        };
        const updateParagraphs = paragraphs.map((paragraph) => {
            if (paragraphId === paragraph.id) {
                return updatedParagraph;
            }
            return paragraph;
        });

        setParagraphs(updateParagraphs);
        updateBlock({ paragraphs: updateParagraphs });
    };

    const onDeleteBlockHandler = (blockId: string) => {
        const updatedBloks = blocks.filter((block) => block.id !== blockId);
        setBlocks(updatedBloks);
    };

    return (
        <div className={classNames(cls.CreateArticleTextComponent, {}, [])}>
            <div>
                <div className={cls.titleWrapper}>
                    <Text title="Title >" />
                    <Button onClick={() => onDeleteBlockHandler(blockId)}>X</Button>
                </div>

                <Input onChange={onTitleChange} value={title} theme={ThemeInput.OUTLINE} placeholder="" />
            </div>
            <div>
                <Text title="Paragraphs" />
            </div>
            <div>
                {
                    paragraphs.map((paragraph, i) => (
                        <div key={paragraph.id} className={cls.paragraphWrapper}>
                            <textarea
                                onChange={(e) => onParagraphChange(e, paragraph.id)}
                                className={cls.textArea}
                                name=""
                                rows={5}
                                value={paragraph.text}
                            />
                            <Button onClick={() => deleteParagraphHandler(paragraph.id)}>X</Button>
                        </div>
                    ))
                }
            </div>
            <Button onClick={() => addParagraphHandler()}>Add paragraph</Button>

        </div>
    );
};

export default CreateArticleTextComponent;
