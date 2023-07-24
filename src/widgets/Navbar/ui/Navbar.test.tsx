import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('navbar', () => {
    test('navbar rendered', () => {
        ComponentRender(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });
});
