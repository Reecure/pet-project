import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('button', () => {
    test('default button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button with clear theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });

    test('button with rounded theme', () => {
        render(<Button theme={ThemeButton.ROUNDED}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('rounded');
        screen.debug();
    });
});
