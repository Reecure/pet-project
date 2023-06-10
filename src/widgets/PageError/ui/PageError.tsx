import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
    const reloadPageHandler = () => {
        window.location.reload();
    };

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Something went wrong')}
            <Button onClick={reloadPageHandler}>{t('Reload page')}</Button>
        </div>
    );
};

export default PageError;
