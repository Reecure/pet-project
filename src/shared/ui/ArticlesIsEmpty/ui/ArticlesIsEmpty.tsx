import { useTranslation } from 'react-i18next';
import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ArticlesIsEmpty.module.scss';
import { Text } from '@/shared/ui/Text';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
}

const ArticlesIsEmpty: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesIsEmpty, {}, [])}>
            <Text
                text={t('There are no articles')}
                textSize={TextSizes.TEXT2XL}
                haveError={true}
                fontWeight={FontWeight.FONTBOLD}
            />
        </div>
    );
};
export default memo(ArticlesIsEmpty);
