import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Text from './Text';

describe('Text', () => {
    test('Text rendered', () => {
        ComponentRender(<Text text="main text" />);
        const viewsComponent = screen.getByTestId('text');
        expect(viewsComponent.textContent).toContain('main text');
        expect(viewsComponent.className).toContain('text');
    });
});
