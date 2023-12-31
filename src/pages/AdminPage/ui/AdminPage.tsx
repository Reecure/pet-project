import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './AdminPage.module.scss';
import ArticleForAccept from './ArticleForAccept/ArticleForAccept';

interface Props {
}

const AdminPage: FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <section data-testid="adminPage" className={classNames(cls.AdminPage, {}, [])}>
            {
                Array(15).fill(null).map((item, i) => <ArticleForAccept key={i} />)
            }
        </section>
    );
};

export default AdminPage;
