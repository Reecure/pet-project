import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Loader.module.scss';

interface Props {
}

const Loader:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Loader, {}, [])}>
            <div className={cls.circleOne} />
            <div className={cls.circleTwo} />
            <div className={cls.circleThree} />
        </div>
    );
};

export default Loader;
