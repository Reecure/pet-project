import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ServerError.module.scss';

interface Props {
}

const ServerError: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ServerError, {}, [])}>
            <p>{t('ServerError')}</p>
        </div>
    );
};
export default ServerError;
