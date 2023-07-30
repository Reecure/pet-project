import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';

import Stack from './Stack';

describe('Stack', () => {
    test('Stack rendered', () => {
        ComponentRender(<Stack className="test-classname"><p>test</p></Stack>);
        const stackComponent = screen.getByTestId('stack');
        expect(stackComponent.textContent).toContain('test');
        expect(stackComponent.className).toContain('test-classname');
    });

    test('Stack check correct width and height', () => {
        const testWidth = 200;
        const testHeight = 320;

        ComponentRender(<Stack width={testWidth} height={testHeight} className="test-classname"><p>test</p></Stack>);
        const stackComponent = screen.getByTestId('stack');
        expect(stackComponent).toHaveStyle(`maxHeight: ${testHeight}px`);
        expect(stackComponent).toHaveStyle(`maxWidth: ${testWidth}px`);
    });
});
