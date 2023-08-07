import React, {
    CSSProperties, FC, memo, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/classNames';

type Props = {
    className?: string
    src: string
    size?: number
}

const Avatar: FC<Props> = ({ src, size, className }) => {
    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
        borderRadius: '100%',
    }), [size]);
    return (
        <img data-testid="avatar" style={styles} className={classNames('', {}, [className])} src={src} alt="avatar" />
    );
};

export default memo(Avatar);
