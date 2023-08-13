import React, { FC, memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const ballPosition = theme === Theme.LIGHT ? '2px' : '22px'; // Adjust this based on your layout

    return (
        <Button
            data-testid="theme-switcher"
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <div
                data-testid="theme-swither-state"
                className={cls.ball}
                style={{ left: ballPosition }}
            />
        </Button>
    );
};

export default memo(ThemeSwitcher);
