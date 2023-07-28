import { FC, memo } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import sun from '../../../shared/assets/sun.svg';
import moon from '../../../shared/assets/moon.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import Image from '@/shared/ui/Image/Image';

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
                {theme === Theme.LIGHT
                    ? (
                        <div data-testid="dark-icon">
                            <Image src={moon} width={35} height={35} />
                        </div>
                    )

                    : (
                        <div data-testid="light-icon">
                            <Image src={sun} width={35} height={35} />
                        </div>
                    )}
            </div>
        </Button>
    );
};

export default memo(ThemeSwitcher);
