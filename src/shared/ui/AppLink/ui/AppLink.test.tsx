import { screen } from '@testing-library/react';
import AppLink from './AppLink';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';

describe('AppLink', () => {
    const redirect = '/test-route';

    test('link rendered', () => {
        ComponentRender(<AppLink className="my-cls" to={redirect} />);

        const appLinkComponent = screen.getByTestId('link');

        expect(appLinkComponent).toBeInTheDocument();
    });

    test('link redirect', () => {
        const redirect = '/test-route';

        ComponentRender(<AppLink className="my-cls" to={redirect} />);

        const appLinkComponent = screen.getByTestId('link');
        expect(appLinkComponent).toBeInTheDocument();
        expect(appLinkComponent).toHaveAttribute('href', redirect);
    });
});
