import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'shared/ui/Text';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { ArticleBlocks, BlockTypes, CodeBlock } from 'enteties/Article/model/types/article';
import { getCreateFields } from 'pages/CreateArticlePage/model/selectors/getCreateArticle';
import { setArticleBlocks } from 'pages/CreateArticlePage/model/slice/addArticleSlice';
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
    return (
        <div className={classNames(cls.CreateArticleCodeComponent, {}, [])}>
            <Text title="Code Block" />
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
