import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import ThemeSwitcher from './ThemeSwitcher';

describe('theme switcher', () => {
    test('theme switcher rendered', () => {
        ComponentRender(<ThemeSwitcher />);
        expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
    });

    test('renders LightIcon when theme is Dark', () => {
        ComponentRender(<ThemeSwitcher />);
        expect(screen.getByTestId('theme-switcher')).toContainElement(screen.getByTestId('theme-swither-state'));
        expect(screen.getByTestId('theme-swither-state')).toBeInTheDocument();
        expect(screen.getByTestId('theme-swither-state')).toContainElement(screen.getByTestId('light-icon'));
    });
    test('renders DarkIcon when theme is Light', () => {
        ComponentRender(<ThemeSwitcher />);
        const toggle = screen.getByTestId('theme-switcher');
        expect(screen.getByTestId('theme-switcher')).toContainElement(screen.getByTestId('theme-swither-state'));
        expect(screen.getByTestId('theme-swither-state')).toBeInTheDocument();
        fireEvent.click(toggle);
        expect(screen.getByTestId('theme-swither-state')).toContainElement(screen.getByTestId('dark-icon'));
    });
});
