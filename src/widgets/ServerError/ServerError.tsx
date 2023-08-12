import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ServerError.module.scss'
import {FC} from 'react';

interface Props {
}

const ServerError: FC<Props> = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ServerError, {}, [])}>
            <p>{t('ServerError')}</p>
        </div>
    );
};
export default ServerError;
