import { type FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/dark.svg';
import LightIcon from 'shared/assets/icons/light.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps { className?: string; }

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            <div
                className={classNames(cls.ball, {}, [
                    theme === Theme.LIGHT ? cls.ballLight : cls.ballDark,
                ])}
            />
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
