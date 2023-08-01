import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserHasntArticles.module.scss';
import { Text } from '@/shared/ui/Text';
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
        <div className={classNames(cls.UserHasntArticles, {}, [])}>
            <Text title="It`s looks that you haven`t articles" />
            <Button theme={ThemeButton.CLEAR} onClick={redirectToCreateArticles}>Create?</Button>
        </div>
    );
};
export default UserHasntArticles;
