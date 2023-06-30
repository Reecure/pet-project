import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = memo(({ className }) => {
    const { t, i18n } = useTranslation('translation');
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle}>
            {i18n.language === 'en' ? 'ua'.toUpperCase() : 'en'.toUpperCase()}
        </Button>
    );
});

export default LangSwitcher;
