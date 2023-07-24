import { ButtonHTMLAttributes, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export const enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  OUTLINE_INVERTED ='outline_inverted',
  OUTLINE_RED = 'outline_red'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    disabled?: boolean
}

const Button = memo(
    (props: ButtonProps) => {
        const {
            theme, disabled, children, className, ...otherProps
        } = props;

        return (
            <button
                type="button"
                disabled={disabled}
                {...otherProps}
                className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme]])}
            >
                {children}
            </button>
        );
    },
);

export default Button;
