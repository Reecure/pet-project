import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface Props {
}

const Loader: FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div data-testid="loader" className={classNames(cls.Loader, {}, [])}>
            <div className={cls.circleOne} />
            <div className={cls.circleTwo} />
            <div className={cls.circleThree} />
        </div>
    );
};

export default Loader;
