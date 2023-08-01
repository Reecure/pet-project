import React, {FC, InputHTMLAttributes} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export const enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    theme?: ThemeInput
    className?: string
}

const InputWithValidation: FC<InputProps> = ({
                                                 theme,
                                                 className,
                                                 ...otherProps
                                             }) => {


    return (
        <div>
            <input
                {...otherProps}

                className={classNames(cls.Input, {}, [className, cls[theme]])}
            />

        </div>
    );
};

export default InputWithValidation;
