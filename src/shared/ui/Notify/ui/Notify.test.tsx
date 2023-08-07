import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Notify from './Notify';

describe('Notify', () => {
    test('Notify rendered', () => {
        ComponentRender(<Notify open={true}>some test text</Notify>);
        const notifyComponent = screen.getByTestId('notify');

        expect(notifyComponent).toBeInTheDocument();
        expect(notifyComponent.textContent).toContain('some test text');
        expect(notifyComponent.className).toContain('Notify');
    });

    test('Notify is closed', () => {
        ComponentRender(<Notify open={false}>some test text</Notify>);
        const notifyComponent = screen.queryByTestId('notify');

        expect(notifyComponent).toBeNull();
    });
});
