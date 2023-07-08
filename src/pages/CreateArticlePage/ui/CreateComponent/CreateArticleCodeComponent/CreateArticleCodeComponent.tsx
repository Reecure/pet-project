import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'shared/ui/Text';
import cls from './CreateArticleCodeComponent.module.scss';

interface Props {
}

const CreateArticleCodeComponent:FC<Props> = () => {
    const { t } = useTranslation();
    const [rows, setRows] = useState(1);

    const handleTextAreaChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const textareaLineHeight = 24; // Adjust this value based on your textarea's line-height CSS property
        const currentRows = Math.ceil((event.target.scrollHeight - textareaLineHeight) / textareaLineHeight);

        if (currentRows !== rows) {
            setRows(currentRows);
        }
    };
    return (
        <div className={classNames(cls.CreateArticleCodeComponent, {}, [])}>
            <Text title="Code Block" />
            <div className={cls.textAreaWrapper}>
                <div className={cls.linesNumber}>
                    { Array.from({ length: rows }).map((_, i) => (<p key={i}>{i + 1}</p>)) }

                </div>
                <textarea onChange={handleTextAreaChange} className={cls.textArea} name="" id="" rows={rows} />
            </div>
        </div>
    );
};

export default CreateArticleCodeComponent;
