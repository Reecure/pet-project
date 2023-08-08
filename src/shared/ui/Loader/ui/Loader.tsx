import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './Loader.module.scss';

interface Props {
    className?: string
}

const Loader: FC<Props> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div data-testid="loader" className={classNames(cls.Loader, {}, [className])}>
            <div className={cls.circleOne}/>
            <div className={cls.circleTwo}/>
            <div className={cls.circleThree}/>
        </div>
    );
};

export default memo(Loader);
