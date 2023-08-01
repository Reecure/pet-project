import React, { ChangeEvent, FC, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { validateInput, ValidationErrorType } from '@/shared/lib/validation/validationUtils';

export const enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    theme?: ThemeInput;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
}

const InputWithValidation: FC<InputProps> = ({
    value,
    onChange,
    className,
    theme = ThemeInput.CLEAR,
    required = false,
    minLength,
    maxLength,
    ...otherProps
}) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        const errorType = validateInput(inputValue, required, minLength, maxLength);
        if (errorType) {
            // Set error message if there's a validation error
            switch (errorType) {
            case ValidationErrorType.REQUIRED:
                setErrorMessage('This field is required.');
                break;
            case ValidationErrorType.MIN_LENGTH:
                setErrorMessage(`Minimum ${minLength} characters are required.`);
                break;
            case ValidationErrorType.MAX_LENGTH:
                setErrorMessage(`Maximum ${maxLength} characters allowed.`);
                break;
                // Handle more validation error types as needed
            default:
                setErrorMessage('');
            }
        } else {
            setErrorMessage('');
        }
        onChange(inputValue); // Update the parent component's state with the input value
    };

    return (
        <div>
            <input
                {...otherProps}
                value={value}
                onChange={handleInputChange}
                className={classNames(cls.Input, {}, [className, cls[theme]])}
            />
            {errorMessage && <div className={cls.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

export default InputWithValidation;
