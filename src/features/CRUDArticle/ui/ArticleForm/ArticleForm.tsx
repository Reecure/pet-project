import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import {
    ErrorMessage, Field, FieldArray, Form, Formik,
} from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import cls from './ArticleForm.module.scss';
import { Text } from '@/shared/ui/Text';
import {
    ArticleBlocks, ArticleForSend, ArticleTypes, BlockTypes,
} from '@/enteties/Article/model/types/article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import BlockButtons from './BlockButtons/BlockButtons';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
    article?: ArticleForSend
    loading?: boolean,
    onSubmit: (values: ArticleForSend) => void
    submitError: boolean
}

const ArticleForm: FC<Props> = ({
    article, loading, onSubmit, submitError,
}) => {
    const { t } = useTranslation();

    const initialValues: ArticleForSend = {
        title: article?.title || '',
        subtitle: article?.subtitle || '',
        img: article?.img || '',
        views: article?.views || 0,
        type: article?.type || [],
        blocks: article?.blocks || [],
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(t('Title is required')).min(4, t('Too short!')).max(30, t('Too long!')),
        subtitle: Yup.string().required(t('Subtitle is required')).min(4, t('Too short!')),
        img: Yup.string().url(t('Please enter a valid URL')).required(t('Image URL is required')),
    });

    return (
        <>
            {submitError && <p className="error">{t('Article doesnt send some server error')}</p>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit(values);
                }}
            >
                {
                    ({ values, errors }) => (
                        <Form>

                            <div className={cls.headerFields}>
                                <label htmlFor="title">
                                    <Text
                                        text={t('Title')}
                                        fontWeight={FontWeight.FONTBOLD}
                                        textSize={TextSizes.TEXT2XL}
                                    />
                                    <Field type="text" id="title" name="title" className={cls.field} />
                                    <ErrorMessage name="title" component="div" className={cls.error} />
                                </label>

                                <label htmlFor="subtitle">
                                    <Text
                                        text={t('Subtitle')}
                                        fontWeight={FontWeight.FONTBOLD}
                                        textSize={TextSizes.TEXT2XL}
                                    />
                                    <Field type="text" id="subtitle" name="subtitle" className={cls.field} />
                                    <ErrorMessage name="subtitle" component="div" className={cls.error} />
                                </label>

                                <label htmlFor="img">
                                    <Text
                                        text={t('Image')}
                                        fontWeight={FontWeight.FONTBOLD}
                                        textSize={TextSizes.TEXT2XL}
                                    />
                                    <Field type="text" id="img" name="img" className={cls.field} />
                                    <ErrorMessage name="img" component="div" className={cls.error} />
                                </label>
                            </div>

                            <div className={cls.typesWrapper}>
                                <Text
                                    text={t('Types')}
                                    fontWeight={FontWeight.FONTBOLD}
                                    textSize={TextSizes.TEXT2XL}
                                />
                                <div>
                                    <FieldArray name="type">
                                        {({ push, remove }) => (
                                            <div className={cls.types}>
                                                {Object.values(ArticleTypes).map((type) => (
                                                    <div key={type} className="">
                                                        <label className={cls.checkboxLabel}>
                                                            <Field
                                                                type="checkbox"
                                                                name="type"
                                                                value={type}
                                                                className={cls.hiddenCheckbox}
                                                            />
                                                            <div className={cls.checkboxBlock}>{t(type)}</div>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>
                            </div>

                            <Text
                                text={t('Blocks')}
                                fontWeight={FontWeight.FONTBOLD}
                                textSize={TextSizes.TEXT2XL}
                                className={cls.blocks}
                            />
                            <FieldArray name="blocks">
                                {({ push, remove }) => (
                                    <div>
                                        {values.blocks.map((block: ArticleBlocks, index: number) => (
                                            <div key={index} className={cls.blockWrapper}>
                                                {block.type === BlockTypes.TEXT && (
                                                    <div className={cls.block}>
                                                        <Text
                                                            text={t('Text Block')}
                                                            fontWeight={FontWeight.FONTBOLD}
                                                            textSize={TextSizes.TEXTXL}
                                                        />
                                                        <Text
                                                            text={t('Text Block Title')}
                                                            fontWeight={FontWeight.FONTLIGHT}
                                                            textSize={TextSizes.TEXTBASE}
                                                        />
                                                        <Field
                                                            type="text"
                                                            name={`blocks.${index}.title`}
                                                            className={cls.field}
                                                        />
                                                        <ErrorMessage
                                                            name={`blocks.${index}.title`}
                                                            component="div"
                                                            className={cls.error}
                                                        />

                                                        <Text text={t('Paragraphs')} />
                                                        <FieldArray name={`blocks.${index}.paragraphs`}>
                                                            {({ push: pushParagraph, remove: removeParagraph }) => (
                                                                <div>
                                                                    {block.paragraphs.map((paragraph, paraIndex) => (
                                                                        <div
                                                                            key={paraIndex}
                                                                            className={cls.blockWrapper}
                                                                        >
                                                                            <Field
                                                                                type="text"
                                                                                as="textarea"
                                                                                name={`blocks.${index}.paragraphs.${paraIndex}.text`}
                                                                                className={cls.textareaField}
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`blocks.${index}.paragraphs.${paraIndex}.text`}
                                                                                component="div"
                                                                                className={cls.error}
                                                                            />

                                                                            <Button
                                                                                theme={ThemeButton.OUTLINE_RED}
                                                                                type="button"
                                                                                onClick={() => removeParagraph(paraIndex)}
                                                                            >
                                                                                {t('Remove')}
                                                                            </Button>
                                                                        </div>
                                                                    ))}
                                                                    <Button
                                                                        theme={ThemeButton.OUTLINE}
                                                                        type="button"
                                                                        onClick={() => pushParagraph({
                                                                            id: nanoid(),
                                                                            text: '',
                                                                        })}
                                                                    >
                                                                        {t('Add Paragraph')}
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </FieldArray>
                                                    </div>
                                                )}

                                                {block.type === BlockTypes.CODE && (
                                                    <div className={cls.block}>
                                                        <Text
                                                            text={t('Code Block')}
                                                            fontWeight={FontWeight.FONTBOLD}
                                                            textSize={TextSizes.TEXTXL}
                                                        />
                                                        <Field
                                                            as="textarea"
                                                            name={`blocks.${index}.code`}
                                                            id={`blocks.${index}.code`}
                                                            className={cls.textareaField}
                                                        />
                                                        <ErrorMessage
                                                            name={`blocks.${index}.code`}
                                                            component="div"
                                                            className={cls.error}
                                                        />
                                                    </div>
                                                )}

                                                {block.type === BlockTypes.IMAGE && (
                                                    <div className={cls.block}>
                                                        <Text
                                                            text={t('Image Block')}
                                                            fontWeight={FontWeight.FONTBOLD}
                                                            textSize={TextSizes.TEXTXL}
                                                        />
                                                        <Text text={t('Image URL')} />
                                                        <Field
                                                            type="text"
                                                            name={`blocks.${index}.src`}
                                                            id={`blocks.${index}.src`}
                                                            className={cls.field}
                                                        />
                                                        <ErrorMessage
                                                            name={`blocks.${index}.src`}
                                                            component="div"
                                                            className={cls.error}
                                                        />

                                                        <Text text={t('Image Title')} />
                                                        <Field
                                                            type="text"
                                                            name={`blocks.${index}.title`}
                                                            id={`blocks.${index}.title`}
                                                            className={cls.field}
                                                        />
                                                        <ErrorMessage
                                                            name={`blocks.${index}.title`}
                                                            component="div"
                                                            className={cls.error}
                                                        />
                                                    </div>
                                                )}

                                                <Button
                                                    theme={ThemeButton.OUTLINE_RED}
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                >
                                                    {t('Delete')}
                                                </Button>
                                            </div>
                                        ))}
                                        <BlockButtons push={push} />
                                    </div>
                                )}
                            </FieldArray>

                            <Button
                                theme={ThemeButton.SUCCESS}
                                type="submit"
                                className={cls.submitButton}
                            >
                                {t('Submit')}
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
};
export default ArticleForm;
