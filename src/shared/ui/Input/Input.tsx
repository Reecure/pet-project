import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Input:FC<InputProps> = memo(({ className, ...otherProps }) => (
    <input {...otherProps} className={classNames(cls.Input, {}, [className])} />
));

export default Input;
