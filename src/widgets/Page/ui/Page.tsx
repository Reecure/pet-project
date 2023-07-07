import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Page.module.scss';

interface Props {
}

const Page:FC<Props> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <section className={classNames(cls.Page, {}, [])}>
            {children}
        </section>
    );
};

export default Page;
