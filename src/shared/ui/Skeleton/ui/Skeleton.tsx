import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Skeleton.module.scss';

interface Props {
    width: number,
    height: number,
}

const Skeleton: FC<Props> = ({ height, width }) => (
    <div data-testid="skeleton" style={{ height, width }} className={classNames(cls.Skeleton, {}, [])} />
);

export default memo(Skeleton);
