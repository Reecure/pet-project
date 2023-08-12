import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';

const categories = [
    {
        title: 'Technology:',
        paragraph: 'Stay updated with the latest advancements in the world of technology. From IT trends to cutting-edge innovations, our articles cover a broad spectrum of tech-related topics.',
    },
    {
        title: 'Science & Nature:',
        paragraph: 'Unravel the mysteries of the natural world with our science and nature articles. Delve into scientific discoveries, environmental issues, and much more.',
    },
    {
        title: 'Education & Learning:',
        paragraph: 'Empower yourself with insights into effective learning techniques, educational trends, and tools that can enhance your knowledge journey.',
    },
    {
        title: 'Economics & Finance:',
        paragraph: 'Understand the complexities of economics and finance with our expertly curated articles on market dynamics, financial strategies, and global economic trends.',
    },
    {
        title: 'Mathematics & Logic:',
        paragraph: 'Embrace the beauty of numbers and explore the depths of logical reasoning with our mathematics and logic-focused content.',
    },
    {
        title: 'Physics & Astronomy:',
        paragraph: 'Embark on a cosmic journey through our physics and astronomy articles, touching upon celestial wonders and the laws that govern the universe.',
    },
    {
        title: 'Mind & Psychology:',
        paragraph: 'Gain insights into the human mind and behavior with our psychology articles. Discover tips for personal growth and emotional well-being.',
    },
    {
        title: 'Languages & Linguistics:',
        paragraph: 'Dive into the diverse world of languages and linguistics, exploring language structures, linguistic anthropology, and more.',
    },
    {
        title: 'Programming & Development:',
        paragraph: 'For tech enthusiasts and developers, we offer articles on programming languages, software development, and coding best practices.',
    },
    {
        title: 'Web & App Development:',
        paragraph: 'Stay ahead in the digital world with our web and app development articles, covering the latest trends and tools.',
    },
    {
        title: 'Data Science & Analytics:',
        paragraph: 'Unlock the power of data with our data science and analytics content, which explores data-driven insights and machine learning.',
    },
    {
        title: 'AI & Machine Learning:',
        paragraph: 'Delve into the fascinating realm of artificial intelligence and machine learning, where cutting-edge technologies shape the future.',
    },
    {
        title: 'Blockchain & Cryptocurrency:',
        paragraph: 'Explore the transformative potential of blockchain technology and cryptocurrencies, revolutionizing industries worldwide.',
    },

];

const AboutPage = () => {
    const {t} = useTranslation('about');

    return (
        <div data-testid='aboutPage'>
           
        </div>
    );
};

export default memo(AboutPage);
