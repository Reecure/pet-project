import React, { FC, InputHTMLAttributes, Props } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input:FC<InputProps> = ({ ...otherProps }) => (
    <input {...otherProps} className={classNames(cls.Input, {}, [])} />
);

export default Input;
