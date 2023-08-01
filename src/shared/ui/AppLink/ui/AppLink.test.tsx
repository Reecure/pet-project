import { screen } from '@testing-library/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';

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

    test('link primary', () => {
        ComponentRender(<AppLink className="my-cls" to={redirect} />);
        const appLinkComponent = screen.getByTestId('link');
        expect(appLinkComponent).toBeInTheDocument();
        expect(appLinkComponent.className).toContain('primary');
    });

    test('link secondary', () => {
        ComponentRender(<AppLink theme={AppLinkTheme.SECONDARY} className="my-cls" to={redirect} />);
        const appLinkComponent = screen.getByTestId('link');
        expect(appLinkComponent).toBeInTheDocument();
        expect(appLinkComponent.className).toContain('secondary');
    });
});
