import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import cls from './Code.module.scss';

interface Props {
    children: React.ReactNode
}

const Code:FC<Props> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <pre>
            <code>{children}</code>
        </pre>

    );
};

export default Code;
