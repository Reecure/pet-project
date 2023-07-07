import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { AiFillEye } from 'react-icons/ai';
import cls from './Views.module.scss';

interface Props {
    views: string | number
}

const Views:FC<Props> = ({ views }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Views, {}, [])}>
            <AiFillEye />
            <p>{views}</p>
        </div>
    );
};

export default Views;
