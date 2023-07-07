import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { getAllArticles } from 'pages/ArticlesPage/model/services/getArticles';
import { getArticles } from 'pages/ArticlesPage/model/slice/articlesSlice';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            <div>
                {t('About Page')}
            </div>
            <Loader />
        </div>
    );
};

export default memo(AboutPage);
