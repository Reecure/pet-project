import { FC, memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FiMoon } from 'react-icons/fi';
import { BsFillSunFill } from 'react-icons/bs';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
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
                {theme === Theme.LIGHT ? <BsFillSunFill /> : <FiMoon />}
            </div>
        </Button>
    );
};

export default memo(ThemeSwitcher);
