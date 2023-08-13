import {FC, memo} from 'react';

import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames';
import {Button} from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = ({className}) => {
    const reloadPageHandler = () => {
        window.location.reload();
    };
    const {t} = useTranslation();

    return (
        <div data-testid="error-page" className={classNames(cls.PageError, {}, [className])}>
            {t('Something went wrong')}
            <Button onClick={reloadPageHandler}>{t('Reload page')}</Button>
        </div>
    );
};

export default memo(PageError);
