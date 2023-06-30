import { FC, memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps { className?: string; }

const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            data-testid="theme-switcher"
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <div
                data-testid="theme-swither-state"
            >
                {theme === Theme.LIGHT ? <div data-testid="light-icon" /> : <div data-testid="dark-icon" />}
            </div>
        </Button>
    );
});

export default ThemeSwitcher;
