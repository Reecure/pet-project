import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return <div>{t('About Page')}</div>;
};

export default memo(AboutPage);
