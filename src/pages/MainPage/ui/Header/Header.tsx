import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Header.module.scss';

interface Props {
}

const Header: FC<Props> = () => {
    const { t } = useTranslation();
    return (
        <section className={classNames(cls.Header, {}, [])}>
            <div className={cls.titleWelcome}><p>Welcome</p></div>

            <p className={cls.titleBottom}>to MyArticle!</p>
        </section>
    );
};
export default Header;
