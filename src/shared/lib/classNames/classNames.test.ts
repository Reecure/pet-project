import { classNames } from './classNames';

describe('classNames', () => {
    test('withOneParam', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('withAdditionalClass', () => {
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(
            'someClass cls1 cls2',
        );
    });

    test('withMods', () => {
        expect(
            classNames('someClass', { hovered: true, clickable: true }, [
                'cls1',
                'cls2',
            ]),
        ).toBe('someClass hovered clickable cls1 cls2');
    });

    test('withModsFalseState', () => {
        expect(
            classNames('someClass', { hovered: true, clickable: false }, [
                'cls1',
                'cls2',
            ]),
        ).toBe('someClass hovered cls1 cls2');
    });

    test('with mod undefined', () => {
        expect(
            classNames('someClass', { hovered: true, clickable: undefined }, [
                'cls1',
                'cls2',
            ]),
        ).toBe('someClass hovered cls1 cls2');
    });
});
