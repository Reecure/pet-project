import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import {FC} from 'react';

import cls from './AdminPage.module.scss';
import ArticleForAccept from "@/pages/AdminPage/ui/ArticleForAccept/ArticleForAccept";

interface Props {
}

const AdminPage: FC<Props> = () => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.AdminPage, {}, [])}>
            <div>{t('AdminPage')}</div>

            {
                Array(15).fill(null).map(item => {
                    return <ArticleForAccept/>
                })
            }

        </div>
    );
};

export default AdminPage;
