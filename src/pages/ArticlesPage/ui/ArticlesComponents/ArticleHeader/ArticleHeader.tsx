import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/hooks';
import { setViewType, viewTypes } from 'pages/ArticlesPage/model/slice/articlesSlice';
import cls from './ArticleHeader.module.scss';

interface Props {
}

const ArticleHeader:FC<Props> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const setBigArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.BIG));
        },
        [dispatch],
    );

    const setSmallArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.SMALL));
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ArticleHeader, {}, [])}>
            <div className={cls.sortingWrapper}>
                <div>
                    <select name="" id="">
                        <option value="">Sort by</option>
                        <option value="">1 option</option>
                        <option value="">2 option</option>
                    </select>
                </div>
                <div>
                    <Button onClick={setBigArticles}>Big</Button>
                    <Button onClick={setSmallArticles}>Small</Button>
                </div>
            </div>
            <div>
                <Input />
            </div>
            <div className={cls.types}>
                <p className={cls.type}>IT</p>
                <p className={cls.type}>Medicine</p>
                <p className={cls.type}>Politic</p>
            </div>
        </div>
    );
};

export default ArticleHeader;
