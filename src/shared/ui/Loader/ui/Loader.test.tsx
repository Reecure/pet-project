import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Loader from './Loader';

describe('Loader', () => {
    test('Loader rendered', () => {
        ComponentRender(<Loader />);
        const notifyComponent = screen.getByTestId('loader');

        expect(notifyComponent).toBeInTheDocument();
        expect(notifyComponent.className).toContain('Loader');
    });
});
