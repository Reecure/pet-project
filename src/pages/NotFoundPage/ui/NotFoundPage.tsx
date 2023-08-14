import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './NotFoundPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <section data-testid="notFoundPage" className={classNames(cls.NotFoundPage, {}, [className])}>
            <Text text={t('Not Found')} textSize={TextSizes.TEXT2XL} fontWeight={FontWeight.FONTBOLD} />
        </section>
    );
};

export default NotFoundPage;
