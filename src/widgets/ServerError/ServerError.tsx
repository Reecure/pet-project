import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ServerError.module.scss';
import { Text } from '@/shared/ui/Text';
import { FontWeight, TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
}

const ServerError: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ServerError, {}, [])}>
            <Text text={t('Server Error')} textSize={TextSizes.TEXTXL} fontWeight={FontWeight.FONTBOLD} />
        </div>
    );
};
export default ServerError;
