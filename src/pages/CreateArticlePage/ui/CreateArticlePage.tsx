import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, useState, useMemo, useEffect, useCallback,
} from 'react';
import { Button } from 'shared/ui/Button';
import {
    ArticleBlocks, BlockTypes,
} from 'enteties/Article/model/types/article';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { Formik, Form, Field } from 'formik';
import cls from './CreateArticlePage.module.scss';
import CreateArticleTextComponent from './CreateComponent/CreateArticleTextComponent/CreateArticleTextComponent';
import CreateArticleCodeComponent from './CreateComponent/CreateArticleCodeComponent/CreateArticleCodeComponent';
import CreateArticlePhotoComponent from './CreateComponent/CreateArticlePhotoComponent/CreateArticlePhotoComponent';
import { addArticle } from '../model/services/addArticle';
import {
    setArticleBlocks, setArticlePreviewImg, setArticleSubTitle, setArticleTitle,
} from '../model/slice/addArticleSlice';
import { getCreateFields } from '../model/selectors/getCreateArticle';
import ArticlesAddBlokButtons from './CreateComponent/ArticlesAddBlokButtons/ArticlesAddBlokButtons';
import ArticlesAddHeader from './CreateComponent/ArticlesAddHeader/ArticlesAddHeader';

interface Props {
}

const CreateArticlePage:FC<Props> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const fields = useAppSelector(getCreateFields);
    const [blocks, setBlocks] = useState<ArticleBlocks[]>([]);

    const sendArticleHandler = useCallback(
        () => {
            dispatch(addArticle(fields));
        },
        [dispatch, fields],
    );

    useEffect(() => {
        dispatch(setArticleBlocks(blocks));
    }, [dispatch, blocks]);

    const blockTypeRender = (blockType: BlockTypes, block?: any) => {
        switch (blockType) {
        case BlockTypes.TEXT:
            return <CreateArticleTextComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;
        case BlockTypes.CODE:
            return <CreateArticleCodeComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;
        case BlockTypes.IMAGE:
            return <CreateArticlePhotoComponent blockId={block.id} blocks={blocks} setBlocks={setBlocks} />;

        default:
            return null;
        }
    };

    const memoBlocks = useMemo(() => blocks.map((item) => <div>{blockTypeRender(item.type, item)}</div>), [blocks]);

    return (
        <div className={classNames(cls.CreateArticlePage, {}, [])}>
            <Formik
                initialValues={{
                    title: '',
                    subTitle: '',
                    img: '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2));
                    await setSubmitting(false);
                    dispatch(setArticleSubTitle(values.subTitle));
                    dispatch(setArticleTitle(values.title));
                    dispatch(setArticlePreviewImg(values.img));
                }}
            >
                {
                    ({ values }) => (
                        <Form>
                            <div>
                                <Button onClick={sendArticleHandler}>Send Article</Button>
                            </div>
                            <ArticlesAddHeader values={values} />
                            <div className={classNames(cls.CreateArticleMain, {}, [])}>
                                <div className={cls.blocksWrapper}>
                                    {
                                        memoBlocks
                                    }
                                </div>
                                <div className={cls.articlesAddBlokButtonsWrapper}>
                                    <ArticlesAddBlokButtons blocks={blocks} setBlocks={setBlocks} />
                                </div>

                            </div>
                        </Form>
                    )
                }

            </Formik>

        </div>
    );
};

export default CreateArticlePage;
