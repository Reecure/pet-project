import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Input, ThemeInput } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { nanoid } from '@reduxjs/toolkit';
import cls from './CreateArticleTextComponent.module.scss';

interface Props {
}

interface Paragraph {
    id: string,
    text: string
}

const CreateArticleTextComponent:FC<Props> = () => {
    const [paragraphs, setParagraphs] = useState<Paragraph[]>([{ id: nanoid(), text: '' }]);
    const { t } = useTranslation();

    const addParagraphHandler = () => {
        const paragraphId = nanoid();
        setParagraphs([...paragraphs, { id: paragraphId, text: '' }]);
        console.log(`added ${paragraphId}`);
    };
    const deleteParagraphHandler = (id: string) => {
        setParagraphs(paragraphs.filter((item) => item.id !== id));
        console.log(`deleted ${id}`);
    };

    return (
        <div className={classNames(cls.CreateArticleTextComponent, {}, [])}>
            <div>
                <Text title="Title >" />
                <Input theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <Text title="Paragraphs" />
            </div>
            <div>
                {
                    paragraphs.map((paragraph, i) => (
                        <div key={paragraph.id} className={cls.paragraphWrapper}>
                            <textarea className={cls.textArea} name="" rows={5} />
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
