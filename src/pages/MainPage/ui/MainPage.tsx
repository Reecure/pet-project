import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface Props {

}

const MainPage:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div>{t('Main Page')}</div>
        </div>
    );
};

export default MainPage;
