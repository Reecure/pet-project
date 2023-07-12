import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Text } from 'shared/ui/Text';
import { Input, ThemeInput } from 'shared/ui/Input';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/hooks';
import { setArticlePreviewImg, setArticleSubTitle, setArticleTitle } from 'pages/CreateArticlePage/model/slice/addArticleSlice';

import { Field } from 'formik';
import cls from './ArticlesAddHeader.module.scss';

interface Props {
    values: {
        title: string,
        subTitle: string,
        img: string
    }
}

const ArticlesAddHeader:FC<Props> = ({ values }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    return (
        <div className={classNames(cls.ArticlesAddHeader, {}, [])}>
            <div>
                <Text title="Title" />
                <Field
                    name="title"
                />
            </div>
            <div>
                <Text title="Subtitle" />
                <Field
                    name="subTitle"
                />
            </div>
            <div>
                <Text title="Img" />
                <Field
                    name="img"
                />
            </div>
            <div>
                Types
            </div>
        </div>
    );
};

export default ArticlesAddHeader;
