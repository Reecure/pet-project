import {fireEvent, screen} from '@testing-library/react';
import {ComponentRender} from '@/shared/lib/tests/componentRender/ComponentRender';
import {Sidebar} from '@/widgets/Sidebar';

describe('sidebar', () => {
    test('sidebar', () => {
        ComponentRender(<Sidebar openSidebar={() => {
        }} sidebarIsOpen={true}/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('sidebar toggle open', () => {
        ComponentRender(<Sidebar openSidebar={() => {
        }} sidebarIsOpen={true}/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(screen.getByTestId('sidebar')).toHaveClass('open');
    });

    test('sidebar toggle not open', () => {
        ComponentRender(<Sidebar openSidebar={() => {
        }} sidebarIsOpen={false}/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('open');
    });
});
