import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect } from 'react';
import { error } from 'console';
import cls from './Text.module.scss';

interface Props {
    title?: string
    mainText?: string
    haveError?: boolean
}

const Text:FC<Props> = ({
    mainText, title, haveError,
}) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [])}>
            <p className={cls.title}>{title}</p>
            <p className={classNames(cls.mainText, { [cls.error]: haveError }, [])}>{mainText}</p>
        </div>
    );
};

export default Text;
