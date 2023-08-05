import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticlesIsEmpty.module.scss';

interface Props {
}

const ArticlesIsEmpty: FC<Props> = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticlesIsEmpty, {}, [])}>
            <div>{t('There are no articles')}</div>
        </div>
    );
};
export default memo(ArticlesIsEmpty);
