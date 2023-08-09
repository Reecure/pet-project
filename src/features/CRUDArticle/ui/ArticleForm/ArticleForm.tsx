import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {ErrorMessage, Field, FieldArray, Form, Formik,} from 'formik';
import {nanoid} from '@reduxjs/toolkit';
import * as Yup from 'yup';
import cls from './ArticleForm.module.scss';
import {Text} from '@/shared/ui/Text';
import {ArticleBlocks, ArticleForSend, ArticleTypes, BlockTypes,} from '@/enteties/Article/model/types/article';
import {Button, ThemeButton} from '@/shared/ui/Button';
import BlockButtons from './BlockButtons/BlockButtons';

interface Props {
    article?: ArticleForSend
    loading?: boolean,
    onSubmit: (values: ArticleForSend) => void
    submitError: boolean
}

const ArticleForm: FC<Props> = ({article, loading, onSubmit, submitError}) => {
    const {t} = useTranslation();

    const initialValues: ArticleForSend = {
        title: article?.title || '',
        subtitle: article?.subtitle || '',
        img: article?.img || '',
        views: article?.views || 0,
        type: article?.type || [],
        blocks: article?.blocks || [],
    };
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required').min(4, 'Too short!').max(30, 'Too long!'),
        subtitle: Yup.string().required('Subtitle is required').min(4, 'Too short!'),
        img: Yup.string().url('Please enter a valid URL').required('Image URL is required'),
        // blocks: Yup.array().of(
        //     Yup.object().shape({
        //         title: Yup.string().test({
        //             test: function (value) {
        //                 const type = this.parent.type;
        //                 return type === BlockTypes.TEXT || type === BlockTypes.IMAGE ? !!value : true;
        //             },
        //             message: 'Block title is required',
        //         }),
        //         code: Yup.string().required('Code is required'),
        //         src: Yup.string().required('Image URL is required and must be a valid URL').test({
        //             test: function (value) {
        //                 const type = this.parent.type;
        //                 return type === BlockTypes.IMAGE ? Yup.string().url().isValidSync(value) : true;
        //             },
        //             message: 'Image URL is required and must be a valid URL',
        //         }),
        //         paragraphs: Yup.array().of(
        //             Yup.object().shape({
        //                 text: Yup.string().required('Paragraph is required')
        //             })
        //         ),
        //     })
        // ),
    });

    return (
        <>
            {submitError && <p>Article doesn`t send some server error</p>}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    onSubmit(values);
                }}
            >
                {
                    ({values, errors}) => (
                        <Form>

                            <div className={cls.headerFields}>
                                <label htmlFor="title">
                                    <Text title={t("Title")}/>
                                    <Field type="text" id="title" name="title" className={cls.field}/>
                                    <ErrorMessage name="title" component="div" className={cls.error}/>
                                </label>

                                <label htmlFor="subtitle">
                                    <Text title={t("Subtitle")}/>
                                    <Field type="text" id="subtitle" name="subtitle" className={cls.field}/>
                                    <ErrorMessage name="subtitle" component="div" className={cls.error}/>
                                </label>

                                <label htmlFor="img">
                                    <Text title={t("Image")}/>
                                    <Field type="text" id="img" name="img" className={cls.field}/>
                                    <ErrorMessage name="img" component="div" className={cls.error}/>
                                </label>
                            </div>

                            <div className={cls.types}>
                                <Text title={t("Types")}/>
                                <FieldArray name="type">
                                    {({push, remove}) => (
                                        <div className={cls.types}>
                                            {Object.values(ArticleTypes).map((type) => (
                                                <div key={type} className={''}>
                                                    <label className={cls.checkboxLabel}>
                                                        <Field
                                                            type="checkbox"
                                                            name="type"
                                                            value={type}
                                                            className={cls.hiddenCheckbox}
                                                        />
                                                        <div className={cls.checkboxBlock}>{type}</div>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </FieldArray>
                            </div>

                            <Text title={t("Blocks")}/>
                            <FieldArray name="blocks">
                                {({push, remove}) => (
                                    <div>
                                        {values.blocks.map((block: ArticleBlocks, index: number) => (
                                            <div key={index} className={cls.blockWrapper}>
                                                {block.type === BlockTypes.TEXT && (
                                                    <div className={cls.block}>
                                                        <Text title={t("Text Block")}/>
                                                        <Text mainText={t("Text Block Title")}/>
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

                                                        <Text mainText={t("Paragraphs")}/>
                                                        <FieldArray name={`blocks.${index}.paragraphs`}>
                                                            {({push: pushParagraph, remove: removeParagraph}) => (
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
                                                                                {t("Remove")}
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
                                                        <Text title={t("Code Block")}/>
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
                                                        <Text title={t("Image Block")}/>
                                                        <Text mainText={t("Image URL")}/>
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

                                                        <Text mainText={t("Image Title")}/>
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
                                        <BlockButtons push={push}/>
                                    </div>
                                )}
                            </FieldArray>

                            <Button theme={ThemeButton.OUTLINE} type="submit"
                                    className={cls.submitButton}>{t('Submit')}</Button>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
};
export default ArticleForm;
