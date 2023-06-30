import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div>{t('Main Page')}</div>
        </div>
    );
};

export default MainPage;
