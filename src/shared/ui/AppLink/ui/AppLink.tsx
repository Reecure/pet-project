import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            data-testid="link"
            {...otherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className])}
        >
            {children}
        </Link>
    );
};

export default memo(AppLink);
