import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { Text } from '@/shared/ui/Text';
import cls from './AboutPage.module.scss';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';
import { AppLink } from '@/shared/ui/AppLink';
import { getArticlesRoute } from '@/shared/config/routeConfig/routeConfig';

const categories = [
    {
        title: t('Technology'),
        paragraph: t('Stay updated with the latest advancements in the world of technology. From IT trends to cutting-edge innovations, our articles cover a broad spectrum of tech-related topics.'),
    },
    {
        title: t('Science & Nature'),
        paragraph: t('Unravel the mysteries of the natural world with our science and nature articles. Delve into scientific discoveries, environmental issues, and much more.'),
    },
    {
        title: t('Education & Learning'),
        paragraph: t('Empower yourself with insights into effective learning techniques, educational trends, and tools that can enhance your knowledge journey.'),
    },
    {
        title: t('Economics & Finance'),
        paragraph: t('Understand the complexities of economics and finance with our expertly curated articles on market dynamics, financial strategies, and global economic trends.'),
    },
    {
        title: t('Mathematics & Logic'),
        paragraph: t('Embrace the beauty of numbers and explore the depths of logical reasoning with our mathematics and logic-focused content.'),
    },
    {
        title: t('Physics & Astronomy'),
        paragraph: t('Embark on a cosmic journey through our physics and astronomy articles, touching upon celestial wonders and the laws that govern the universe.'),
    },
    {
        title: t('Mind & Psychology'),
        paragraph: t('Gain insights into the human mind and behavior with our psychology articles. Discover tips for personal growth and emotional well-being.'),
    },
    {
        title: t('Languages & Linguistics'),
        paragraph: t('Dive into the diverse world of languages and linguistics, exploring language structures, linguistic anthropology, and more.'),
    },
    {
        title: t('Programming & Development'),
        paragraph: t('For tech enthusiasts and developers, we offer articles on programming languages, software development, and coding best practices.'),
    },
    {
        title: t('Web & App Development'),
        paragraph: t('Stay ahead in the digital world with our web and app development articles, covering the latest trends and tools.'),
    },
    {
        title: t('Data Science & Analytics'),
        paragraph: t('Unlock the power of data with our data science and analytics content, which explores data-driven insights and machine learning.'),
    },
    {
        title: t('AI & Machine Learning'),
        paragraph: t('Delve into the fascinating realm of artificial intelligence and machine learning, where cutting-edge technologies shape the future.'),
    },
    {
        title: 'Blockchain & Cryptocurrency',
        paragraph: 'Explore the transformative potential of blockchain technology and cryptocurrencies, revolutionizing industries worldwide.',
    },

];

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <section data-testid="aboutPage">
            <Text text={t('About')} textSize={TextSizes.TEXT4XL} fontWeight={FontWeight.FONTBOLD} />

            <div className={cls.categoriesWrapper}>
                {
                    categories.map((category, i) => (
                        <AppLink key={i} to={getArticlesRoute()} className={cls.categoryWrapper}>
                            <Text
                                text={t(category.title)}
                                textSize={TextSizes.TEXT2XL}
                                fontWeight={FontWeight.FONTMEDIUM}
                            />
                            <Text text={t(category.paragraph)} textSize={TextSizes.TEXTBASE} />
                        </AppLink>
                    ))
                }
            </div>

        </section>
    );
};

export default memo(AboutPage);
