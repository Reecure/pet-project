import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ArticleForAccept.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface Props {
}

const ArticleForAccept: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleForAccept, {}, [])}>
            <div>{t('Article name')}</div>
            <div className={cls.buttonsWrapper}>
                <Button theme={ThemeButton.OUTLINE}>{t('Preview')}</Button>
                <Button theme={ThemeButton.OUTLINE}>{t('Accept')}</Button>
                <Button theme={ThemeButton.OUTLINE_RED}>{t('Decline')}</Button>
            </div>
        </div>
    );
};
export default ArticleForAccept;
