import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export const enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    theme?: ThemeInput
}

const Input: FC<InputProps> = ({ className, theme = ThemeInput.CLEAR, ...otherProps }) => (
    <input data-testid="input" {...otherProps} className={classNames(cls.Input, {}, [className, cls[theme]])} />
);

export default memo(Input);
