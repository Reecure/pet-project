import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import ThemeSwitcher from './ThemeSwitcher';

describe('theme switcher', () => {
    test('theme switcher rendered', () => {
        ComponentRender(<ThemeSwitcher />);
        expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
    });
});
