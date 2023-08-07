import React, {FC, InputHTMLAttributes, memo} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './Input.module.scss';

export const enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: ThemeInput
    className?: string
}

const Input: FC<InputProps> = ({
                                   theme,
                                   className,
                                   ...otherProps
                               }) => (

    <input
        {...otherProps}

        className={classNames(cls.Input, {}, [className, cls[theme]])}
    />

);

export default memo(Input);
