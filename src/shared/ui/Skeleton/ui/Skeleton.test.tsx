import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
    test('Skeleton check correct width and height', () => {
        const testWidth = 200;
        const testHeight = 320;

        ComponentRender(<Skeleton width={testWidth} height={testHeight} />);
        const stackComponent = screen.getByTestId('skeleton');
        expect(stackComponent).toHaveStyle(`height: ${testHeight}px`);
        expect(stackComponent).toHaveStyle(`width: ${testWidth}px`);
    });
});
