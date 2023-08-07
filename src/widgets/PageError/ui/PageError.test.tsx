import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import PageError from './PageError';

describe('page error', () => {
    test('Error page render', () => {
        ComponentRender(<PageError />);
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByTestId('error-page')).toHaveClass('PageError');
    });
});
