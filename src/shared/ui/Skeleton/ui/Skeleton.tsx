import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Skeleton.module.scss';

interface Props {
}

const Skeleton:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Skeleton, {}, [])}>
            <div>{t('Skeleton')}</div>
        </div>
    );
};

export default Skeleton;
