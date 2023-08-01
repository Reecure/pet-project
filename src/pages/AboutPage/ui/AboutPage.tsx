import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('about');

    return (
        <div>
            <div>{t('About Page')}</div>
        </div>
    );
};

export default memo(AboutPage);
