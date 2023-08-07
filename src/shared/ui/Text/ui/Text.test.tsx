import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';
import Text, { TextPosition } from './Text';

describe('Text', () => {
    test('Text rendered', () => {
        ComponentRender(<Text mainText="main text" subText="sub text" />);
        const viewsComponent = screen.getByTestId('text');
        expect(viewsComponent.textContent).toContain('main textsub text');
        expect(viewsComponent.className).toContain('Text');
    });

    test('Text rendered with error text', () => {
        ComponentRender(<Text haveError={true} mainText="main text" />);
        const viewsComponent = screen.getByTestId('text-error');
        expect(viewsComponent.textContent).toContain('main text');
        expect(viewsComponent.className).toContain('mainText error');
    });

    test('Text rendered error center', () => {
        ComponentRender(<Text textPosition={TextPosition.CENTER} />);
        const viewsComponent = screen.getByTestId('text-error');
        expect(viewsComponent.className).toContain('center');
    });

    test('Text rendered error right', () => {
        ComponentRender(<Text textPosition={TextPosition.RIGHT} />);
        const viewsComponent = screen.getByTestId('text-error');
        expect(viewsComponent.className).toContain('right');
    });
});
