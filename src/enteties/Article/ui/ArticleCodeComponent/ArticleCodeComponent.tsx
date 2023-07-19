import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, useState, useEffect, useCallback, memo,
} from 'react';
import { Button, ThemeButton } from 'shared/ui/Button';
import { Code } from 'shared/ui/Code';
import { Notify } from 'shared/ui/Notify';
import { CodeBlock } from '../../model/types/article';
import cls from './ArticleCodeComponent.module.scss';

interface Props {
    block: CodeBlock;
}

const ArticleCodeComponent: FC<Props> = ({ block }) => {
    const [coppied, setCoppied] = useState(false);
    const { t } = useTranslation();

    const codeCopyHandler = useCallback(() => {
        navigator.clipboard.writeText(block.code);
        setCoppied(true);
    }, [block]);

    useEffect(() => {
        const coppiedTimout = setTimeout(() => {
            setCoppied(false);
        }, 1500);
        return () => {
            clearTimeout(coppiedTimout);
        };
    }, [coppied]);

    return (
        <>
            <div className={classNames(cls.ArticleCodeComponent, {}, [])}>
                <Code>{block.code}</Code>
                <Button className={cls.codeCopyButton} theme={ThemeButton.OUTLINE} onClick={codeCopyHandler}>
                    {t('Copy')}
                </Button>
            </div>
            <Notify open={coppied}>
                {t('Coppied')}
                !
            </Notify>
        </>
    );
};

export default memo(ArticleCodeComponent);
