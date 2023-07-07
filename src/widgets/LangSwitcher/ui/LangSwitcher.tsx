import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { i18n } = useTranslation('translation');
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames('', {}, [className])}>
            {i18n.language === 'en' ? 'ua'.toUpperCase() : 'en'.toUpperCase()}
        </Button>
    );
};

export default memo(LangSwitcher);
