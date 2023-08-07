import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { BlockTypes } from '@/enteties/Article/model/types/article';
import cls from './BlockButtons.module.scss';

interface Props {
    push: (value: any) => void;
}

const BlockButtons: FC<Props> = ({ push }) => (
    <div className={cls.buttonsWrapper}>
        <Button
            theme={ThemeButton.OUTLINE}
            type="button"
            onClick={() => push({
                id: nanoid(),
                type: BlockTypes.TEXT,
                title: '',
                paragraphs: [],
            })}
        >
            Add Text Block
        </Button>
        <Button
            theme={ThemeButton.OUTLINE}
            type="button"
            onClick={() => push({
                id: nanoid(),
                type: BlockTypes.CODE,
                code: '',
                lines: 12,
            })}
        >
            Add Code Block
        </Button>
        <Button
            theme={ThemeButton.OUTLINE}
            type="button"
            onClick={() => push({
                type: BlockTypes.IMAGE,
                id: nanoid(),
                src: '',
                title: '',
            })}
        >
            Add Image Block
        </Button>
    </div>
);

export default BlockButtons;
