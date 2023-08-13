import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <section data-testid="notFoundPage" className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Not Found')}
        </section>
    );
};

export default NotFoundPage;
