import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextPosition {
    CENTER = 'center',
    RIGHT = 'right'
}

interface Props {
    className?: string
    title?: string
    mainText?: string
    subText?: string
    haveError?: boolean
    textPosition?: TextPosition
}

const Text: FC<Props> = ({
                             mainText, title, haveError, className, textPosition, subText,
                         }) => (
    <div data-testid="text" className={classNames(cls.Text, {}, [])}>
        <p className={cls.title}>{title}</p>
        <p
            data-testid="text-error"
            className={classNames(cls.mainText, {[cls.error]: haveError}, [className, cls[textPosition]])}
        >
            {mainText}
        </p>
        <p className={cls.subText}>{subText}</p>
    </div>
);

export default memo(Text);
