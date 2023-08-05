import {useTranslation} from 'react-i18next';
import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface Props {
    src: string;
    height?: number;
    width?: number;

}

const Image: FC<Props> = ({
                              height, width, src,
                          }) => {
    const {t} = useTranslation();
    return (
        <img
            className={classNames(cls.image, {}, [])}
            src={src}
            style={{maxWidth: `${width}px` || '100%', maxHeight: `${height}px` || 'auto'}}
            alt={src}
        />
    );
};
export default memo(Image);
