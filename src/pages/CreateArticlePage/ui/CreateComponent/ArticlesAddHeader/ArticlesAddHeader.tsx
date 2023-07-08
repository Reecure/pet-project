import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Text } from 'shared/ui/Text';
import { Input, ThemeInput } from 'shared/ui/Input';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/hooks';
import { setArticlePreviewImg, setArticleSubTitle, setArticleTitle } from 'pages/CreateArticlePage/model/slice/addArticleSlice';
import cls from './ArticlesAddHeader.module.scss';

interface Props {
}

const ArticlesAddHeader:FC<Props> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    return (
        <div className={classNames(cls.ArticlesAddHeader, {}, [])}>
            <div>
                <Text title="Title" />
                <Input onChange={(e) => { dispatch(setArticleTitle(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <Text title="Subtitle" />
                <Input onChange={(e) => { dispatch(setArticleSubTitle(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <Text title="Img" />
                <Input onChange={(e) => { dispatch(setArticlePreviewImg(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                Types
            </div>
        </div>
    );
};

export default ArticlesAddHeader;
