import {fireEvent, render, screen} from '@testing-library/react';
import Button, {ThemeButton} from './Button';

describe('button', () => {
    test('default button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });

    test('button disabled', () => {
        render(<Button disabled={true} theme={ThemeButton.CLEAR}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeDisabled();
    });

    test('button clicked', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} theme={ThemeButton.CLEAR}>Test</Button>);
        const buttonElement = screen.getByTestId('button');
        fireEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
