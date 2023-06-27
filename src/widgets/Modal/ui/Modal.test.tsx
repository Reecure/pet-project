import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import Modal from './Modal';

describe('modal', () => {
    test('does not render modal when isOpen is false', () => {
        ComponentRender(<Modal isOpen={false} setIsOpen={() => {}} />);
        const modalElement = screen.queryByTestId('modal');
        expect(modalElement).not.toBeInTheDocument();
    });
});
