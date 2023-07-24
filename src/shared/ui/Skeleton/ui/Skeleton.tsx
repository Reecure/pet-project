import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Skeleton.module.scss';

interface Props {
    width: number,
    height: number,
}

const Skeleton:FC<Props> = ({ height, width }) => (
    <div style={{ height, width }} className={classNames(cls.Skeleton, {}, [])} />
);

export default Skeleton;
