import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from "@/shared/ui/Text";

const categories = [
    {
        title: 'Technology:',
        paragraph: 'Stay updated with the latest advancements in the world of technology. From IT trends to cutting-edge innovations, our articles cover a broad spectrum of tech-related topics.'
    },
    {
        title: 'Science & Nature:',
        paragraph: 'Unravel the mysteries of the natural world with our science and nature articles. Delve into scientific discoveries, environmental issues, and much more.'
    },
    {
        title: 'Education & Learning:',
        paragraph: 'Empower yourself with insights into effective learning techniques, educational trends, and tools that can enhance your knowledge journey.'
    },
    {
        title: 'Economics & Finance:',
        paragraph: 'Understand the complexities of economics and finance with our expertly curated articles on market dynamics, financial strategies, and global economic trends.'
    },
    {
        title: 'Mathematics & Logic:',
        paragraph: 'Embrace the beauty of numbers and explore the depths of logical reasoning with our mathematics and logic-focused content.'
    },
    {
        title: 'Physics & Astronomy:',
        paragraph: 'Embark on a cosmic journey through our physics and astronomy articles, touching upon celestial wonders and the laws that govern the universe.'
    },
    {
        title: 'Mind & Psychology:',
        paragraph: 'Gain insights into the human mind and behavior with our psychology articles. Discover tips for personal growth and emotional well-being.'
    },
    {
        title: 'Languages & Linguistics:',
        paragraph: 'Dive into the diverse world of languages and linguistics, exploring language structures, linguistic anthropology, and more.'
    },
    {
        title: 'Programming & Development:',
        paragraph: 'For tech enthusiasts and developers, we offer articles on programming languages, software development, and coding best practices.'
    },
    {
        title: 'Web & App Development:',
        paragraph: 'Stay ahead in the digital world with our web and app development articles, covering the latest trends and tools.'
    },
    {
        title: 'Data Science & Analytics:',
        paragraph: 'Unlock the power of data with our data science and analytics content, which explores data-driven insights and machine learning.'
    },
    {
        title: 'AI & Machine Learning:',
        paragraph: 'Delve into the fascinating realm of artificial intelligence and machine learning, where cutting-edge technologies shape the future.'
    },
    {
        title: 'Blockchain & Cryptocurrency:',
        paragraph: 'Explore the transformative potential of blockchain technology and cryptocurrencies, revolutionizing industries worldwide.'
    },


]

const AboutPage = () => {
    const {t} = useTranslation('about');

    return (
        <div>
            <Text title={' Welcome to MyArticle!'}/>

            <Text
                mainText={' MyArticle is a knowledge hub dedicated to providing valuable insights, in-depth articles, and thought-provoking content across a wide range of subjects. Our mission is to foster a community of learners, enthusiasts, and experts who can come together to explore and exchange knowledge on diverse topics.\n'}/>

            <Text title={'Explore Our Categories:'}/>

            {
                categories.map(category => {
                    return <Text title={category.title} mainText={category.paragraph}/>
                })
            }


            <Text title={'Engaging Articles for Everyone:'}
                  mainText={'At MyArticle, we believe that knowledge should be accessible to all. Whether you are a seasoned professional, a curious learner, or an avid enthusiast, you\'ll find articles tailored to your interests and expertise level. Our team of expert writers and contributors ensures that each piece is well-researched, accurate, and engaging.\n'}/>
            <Text title={' Contribute and Connect:'}
                  mainText={'We encourage you to be an active participant in our growing community. Share your expertise, experiences, and insights by contributing articles and engaging in discussions with fellow members. Together, we can create a collaborative environment where knowledge knows no bounds.\n'}/>


            <Text title={'Stay Connected:'}
                  mainText={'Subscribe to our newsletter to receive regular updates on the latest articles and trends in your favorite categories. Connect with us on social media to stay engaged with our community and participate in exciting events and discussions.'}/>
            <Text
                mainText={'Thank you for being a part of MyArticle. We are excited to embark on this knowledge-sharing journey with you. Let\'s explore the world of ideas and expand our horizons together!'}/>


        </div>
    );
};

export default memo(AboutPage);
