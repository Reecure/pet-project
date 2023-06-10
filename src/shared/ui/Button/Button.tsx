import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        theme, children, className, ...otherProps
    } = props;

    return (
        <button
            {...otherProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
