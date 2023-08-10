import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Input, { ThemeInput } from './Input';

describe('Input', () => {
    test('renders with theme (CLEAR)', () => {
        ComponentRender(<Input theme={ThemeInput.CLEAR} />);
        const inputElement = screen.getByTestId('input');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass(ThemeInput.CLEAR);
    });

    test('renders with custom theme (BORDER_BOTTOM)', () => {
        ComponentRender(<Input theme={ThemeInput.BORDER_BOTTOM} />);
        const inputElement = screen.getByTestId('input');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass(ThemeInput.BORDER_BOTTOM);
    });

    test('renders with custom theme (OUTLINE)', () => {
        ComponentRender(<Input theme={ThemeInput.OUTLINE} />);
        const inputElement = screen.getByTestId('input');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass(ThemeInput.OUTLINE);
    });

    test('applies className prop', () => {
        const customClassName = 'custom-input';
        ComponentRender(<Input className={customClassName} />);
        const inputElement = screen.getByTestId('input');

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass(customClassName);
    });

    test('handles input events', async () => {
        const handleChange = jest.fn();
        ComponentRender(<Input onChange={handleChange} />);
        const inputElement = screen.getByTestId('input');
        const inputValue = 'Test input';

        // Simulate user typing in the input
        fireEvent.change(inputElement, { target: { value: inputValue } });
        expect(inputElement).toHaveValue(inputValue);
    });
});
