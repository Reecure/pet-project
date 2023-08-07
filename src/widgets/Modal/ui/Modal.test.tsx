import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Modal, { ModalPositions } from './Modal';

const props = {
    isOpen: true,
    setIsOpen: jest.fn(),
    children: <h1>This is a modal</h1>,
    childrenPosition: ModalPositions.CENTER,
    className: 'my-modal',
};

describe('modal', () => {
    test('renders the component with the correct props', () => {
        ComponentRender(<Modal {...props} />);
        const modalElement = screen.getByTestId('modal');
        expect(modalElement).toBeTruthy();
        expect(modalElement.className).toContain('Modal center my-modal');
        expect(modalElement.textContent).toBe('This is a modal');
    });
    test('render modal when isOpen is true', () => {
        ComponentRender(<Modal {...props} />);
        const dialogElement = screen.getByRole('dialog');
        dialogElement.click();
        expect(props.setIsOpen).toHaveBeenCalledTimes(1);
    });
    test('does not render the modal when isOpen is false', () => {
        const { queryByTestId } = ComponentRender(<Modal {...props} isOpen={false} />);
        const modalElement = queryByTestId('modal');
        expect(modalElement).toBeNull();
    });
});
