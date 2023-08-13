import React, {FC} from 'react';
import {nanoid} from '@reduxjs/toolkit';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {BlockTypes} from '@/enteties/Article/model/types/article';
import cls from './BlockButtons.module.scss';
import {useTranslation} from "react-i18next";

interface Props {
    push: (value: any) => void;
}

const BlockButtons: FC<Props> = ({push}) => {
    const {t} = useTranslation();
    return (
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
                {t("Add Text Block")}
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
                {t('Add Code Block')}
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
                {t('Add Image Block')}
            </Button>
        </div>
    )
}

export default BlockButtons;
