import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from '@/shared/ui/Button';
import cls from './LangSwitcher.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation('translation');
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            data-testid="LangSwitcher"
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {i18n.language === 'en' ? 'ua'.toUpperCase() : 'en'.toUpperCase()}
        </Button>
    );
};

export default memo(LangSwitcher);
