import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import cls from './AdminPage.module.scss';

interface Props {}

const AdminPage: FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AdminPage, {}, [])}>
            <div>{t('AdminPage')}</div>
        </div>
    );
};

export default AdminPage;
