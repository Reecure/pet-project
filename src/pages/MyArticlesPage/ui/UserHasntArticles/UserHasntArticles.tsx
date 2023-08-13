import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './UserHasntArticles.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getCreateArticleRoute } from '@/shared/config/routeConfig/routeConfig';

interface Props {
}

const UserHasntArticles: FC<Props> = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const redirectToCreateArticles = () => {
        navigate(getCreateArticleRoute());
    };

    return (
        <section className={classNames(cls.UserHasntArticles, {}, [])}>
            <p>{t('It`s looks that you haven`t articles')}</p>
            <Button theme={ThemeButton.CLEAR} onClick={redirectToCreateArticles}>
                {t('Create')}
                ?
            </Button>
        </section>
    );
};
export default UserHasntArticles;
