import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { getAllArticles } from 'pages/ArticlesPage/model/services/getArticles';
import { getArticles } from 'pages/ArticlesPage/model/slice/articlesSlice';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return <div>{t('About Page')}</div>;
};

export default memo(AboutPage);
