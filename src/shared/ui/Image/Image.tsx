import { useTranslation } from 'react-i18next';
import React, { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Image.module.scss';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    height?: number;
    width?: number;

}

const Image: FC<Props> = ({
    height, width, src, ...otherProps
}) => {
    const { t } = useTranslation();
    return (
        <img
            {...otherProps}
            className={classNames(cls.image, {}, [])}
            src={src}
            style={{ maxWidth: `${width}px` || '95%', maxHeight: `${height}px` || 'auto' }}
            alt="image"
        />
    );
};
export default memo(Image);
