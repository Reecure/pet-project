import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import LangSwitcher from './LangSwitcher';

describe('LangSwitcher', () => {
    test('LangSwitcher rendered', () => {
        ComponentRender(<LangSwitcher />);
        const langComponent = screen.getByTestId('LangSwitcher');
        expect(langComponent.className).toContain('LangSwitcher');
        expect(screen.getByTestId('LangSwitcher')).toBeInTheDocument();
    });

    test('LangSwitcher inner UA lang', () => {
        ComponentRender(<LangSwitcher />);
        const langComponent = screen.getByTestId('LangSwitcher');
        expect(langComponent.textContent).toBe('UA');
    });

    test('LangSwitcher inner EN lang', () => {
        ComponentRender(<LangSwitcher />);
        const langComponent = screen.getByTestId('LangSwitcher');
        fireEvent.click(langComponent);
        expect(langComponent.textContent).toBe('EN');
    });
});
