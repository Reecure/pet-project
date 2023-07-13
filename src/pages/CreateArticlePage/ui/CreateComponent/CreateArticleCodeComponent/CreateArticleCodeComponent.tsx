import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'shared/ui/Text';
import { ArticleBlocks, BlockTypes, CodeBlock } from 'enteties/Article/model/types/article';
import { Button } from 'shared/ui/Button';
import cls from './CreateArticleCodeComponent.module.scss';

interface Props {
    blockId: string
    blocks: ArticleBlocks[]
    setBlocks: (block: any) => void
}

const CreateArticleCodeComponent:FC<Props> = ({ blockId, blocks, setBlocks }) => {
    const { t } = useTranslation();
    const [rows, setRows] = useState(1);
    const [codeItem, setCodeItem] = useState('');

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedCodeItem = event.currentTarget.value; // Используйте актуальное значение
        setCodeItem(updatedCodeItem);

        const updatedBlock: CodeBlock = {
            id: blockId,
            type: BlockTypes.CODE,
            code: updatedCodeItem, // Используйте актуальное значение
        };

        const updatedBlocks = blocks.map((item) => {
            if (item.id === blockId) {
                return updatedBlock;
            }
            return item;
        });
        setBlocks(updatedBlocks);
    };

    const onDeleteBlockHandler = (blockId: string) => {
        const updatedBloks = blocks.filter((block) => block.id !== blockId);
        setBlocks(updatedBloks);
    };
    return (
        <div className={classNames(cls.CreateArticleCodeComponent, {}, [])}>
            <div className={cls.titleWrapper}>
                <Text title="Code Block" />
                <Button onClick={() => onDeleteBlockHandler(blockId)}>X</Button>
            </div>

            <div className={cls.textAreaWrapper}>
                <div className={cls.linesNumber}>
                    { Array.from({ length: rows })
                        .map((_, i) => (<p key={i}>{i + 1}</p>)) }

                </div>
                <textarea
                    value={codeItem}
                    onChange={handleTextAreaChange}
                    className={cls.textArea}
                    name=""
                    id=""
                    rows={rows}
                />
            </div>
        </div>
    );
};

export default CreateArticleCodeComponent;
