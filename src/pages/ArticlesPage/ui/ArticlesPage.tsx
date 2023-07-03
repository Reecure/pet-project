import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './ArticlesPage.module.scss';

interface Props {
}

const ArticlesPage:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [])}>
            <div>{t('ArticlesPage')}</div>
        </div>
    );
};

export default ArticlesPage;
