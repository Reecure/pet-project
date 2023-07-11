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
}

const CreateArticleCodeComponent:FC<Props> = ({ blockId, blocks }) => {
    const { t } = useTranslation();
    const [rows, setRows] = useState(1);
    const [code, setCode] = useState('');
    const dispatch = useAppDispatch();

    const handleTextAreaChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedCode = event.currentTarget.value; // Store the updated code separately
        setCode(updatedCode);
        const updatedCodeBlock = {
            id: blockId,
            code: updatedCode,
        };

        const updatedBlocks = blocks.map((block) => {
            if (block.id === blockId) {
                return { ...block, ...updatedCodeBlock };
            }
            return block;
        });
        dispatch(setArticleBlocks(updatedBlocks));
    };
    return (
        <div className={classNames(cls.CreateArticleCodeComponent, {}, [])}>
            <Text title="Code Block" />
            <div className={cls.textAreaWrapper}>
                <div className={cls.linesNumber}>
                    { Array.from({ length: rows }).map((_, i) => (<p key={i}>{i + 1}</p>)) }

                </div>
                <textarea value={code} onChange={handleTextAreaChange} className={cls.textArea} name="" id="" rows={rows} />
            </div>
        </div>
    );
};

export default CreateArticleCodeComponent;
