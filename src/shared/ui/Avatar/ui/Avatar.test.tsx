import { screen } from '@testing-library/react';
import Avatar from './Avatar';
import { ComponentRender } from '@/shared/lib/tests/ui/ComponentRender/ComponentRender';

describe('Avatar', () => {
    test('avatar rendered', () => {
        ComponentRender(<Avatar className="my-cls" src="" />);

        const avatarComponent = screen.getByTestId('avatar');
        expect(avatarComponent).toBeInTheDocument();
        expect(avatarComponent.className).toContain('my-cls');
    });

    test('avatar correct sizes', () => {
        const size = 50;

        ComponentRender(<Avatar src="" size={size} />);

        const avatarComponent = screen.getByTestId('avatar');
        expect(avatarComponent).toBeInTheDocument();
        expect(avatarComponent).toHaveStyle(`width: ${size}px`);
    });
});
