import { FC, memo } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { classNames } from '@/shared/lib/classNames';
import cls from './Views.module.scss';

interface Props {
    views: string | number
}

const Views: FC<Props> = ({ views }) => (
    <div data-testid="views" className={classNames(cls.Views, {}, [])}>
        <AiOutlineEye />
        <p>{views}</p>
    </div>
);

export default memo(Views);
