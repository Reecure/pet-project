import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './CreateArticlePage.module.scss';

interface Props {
}

const CreateArticlePage:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CreateArticlePage, {}, [])}>
            <div>{t('CreateArticlePage')}</div>
        </div>
    );
};

export default CreateArticlePage;
