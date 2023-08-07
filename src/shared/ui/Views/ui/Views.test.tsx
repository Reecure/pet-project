import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Views from './Views';

describe('Views', () => {
    test('Views rendered', () => {
        ComponentRender(<Views views={10} />);
        const viewsComponent = screen.getByTestId('views');
        expect(viewsComponent.textContent).toContain('10');
        expect(viewsComponent.className).toContain('Views');
    });
});
