import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import { Page } from '@/widgets/Page';

describe('page', () => {
    test('page component rendered', () => {
        ComponentRender(<Page><p>test</p></Page>);

        const pageElement = screen.getByTestId('page');

        expect(pageElement).toBeInTheDocument();
        expect(pageElement.textContent).toBe('test');
    });
});
