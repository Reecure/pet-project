export const enum ValidationErrorType {
    REQUIRED = 'required',
    MIN_LENGTH = 'min_length',
    MAX_LENGTH = 'max_length',
    // Add more validation error types as needed
}

export const validateInput = (
    inputValue: string,
    required: boolean,
    minLength?: number,
    maxLength?: number,
): ValidationErrorType | null => {
    if (required && !inputValue.trim()) {
        return ValidationErrorType.REQUIRED;
    }
    if (minLength !== undefined && inputValue.length < minLength) {
        return ValidationErrorType.MIN_LENGTH;
    }
    if (maxLength !== undefined && inputValue.length > maxLength) {
        return ValidationErrorType.MAX_LENGTH;
    }
    return null; // No validation error
};
