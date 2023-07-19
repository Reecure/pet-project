import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';
import { Skeleton } from 'shared/ui/Skeleton';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <div>{t('About Page')}</div>
            <Skeleton height={100} width={200} />
            <Loader />
        </div>
    );
};

export default memo(AboutPage);
