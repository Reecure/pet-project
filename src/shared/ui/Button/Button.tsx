import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  ROUNDED= 'rounded'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean
}

const Button: FC<ButtonProps> = (props) => {
    const {
        theme, disabled, children, className, ...otherProps
    } = props;

    return (
        <button
            type="button"
            disabled={disabled}
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
