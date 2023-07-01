import React, { FC, CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

type Props = {
    className?: string
    src: string
    size?: number
}

const Avatar:FC<Props> = ({ src, size, className }) => {
    const styles = useMemo<CSSProperties>(() => ({
        height: size || 100,
        width: size || 100,
    }), [size]);
    return (
        <img style={styles} className={classNames('', {}, [className])} src={src} alt="avatar" />
    );
};

export default Avatar;
