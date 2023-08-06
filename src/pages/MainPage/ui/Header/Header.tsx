import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss'
import {FC} from 'react';

interface Props {
}

const Header: FC<Props> = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.Header, {}, [])}>
            <div className={cls.titleWelcome}><p>Welcome</p></div>
            
            <p className={cls.titleBottom}>to MyArticle!</p>
        </div>
    );
};
export default Header;