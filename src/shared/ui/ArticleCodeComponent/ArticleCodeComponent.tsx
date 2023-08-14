import { useTranslation } from 'react-i18next';
import {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Code } from '@/shared/ui/Code';
import { Notify } from '@/shared/ui/Notify';
import { CodeBlock } from '../../../enteties/Article/model/types/article';
import cls from './ArticleCodeComponent.module.scss';

interface Props {
    block: CodeBlock;
}

const ArticleCodeComponent: FC<Props> = ({ block }) => {
    const [copied, setCopied] = useState(false);
    const { t } = useTranslation();

    const codeCopyHandler = useCallback(() => {
        navigator.clipboard.writeText(block.code);
        setCopied(true);
    }, [block]);

    useEffect(() => {
        const copiedTimout = setTimeout(() => {
            setCopied(false);
        }, 1500);
        return () => {
            clearTimeout(copiedTimout);
        };
    }, [copied]);

    return (
        <article className={classNames(cls.ArticleCodeComponent, {}, [])}>
            <div className={cls.copyButtonWrapper}>
                <Button className={cls.codeCopyButton} theme={ThemeButton.OUTLINE} onClick={codeCopyHandler}>
                    {t('Copy')}
                </Button>
            </div>
            <div className={cls.codeBlock}>

                <Code>{block.code}</Code>
            </div>
            <Notify open={copied}>
                {t('Copied')}
                !
            </Notify>
        </article>
    );
};

export default memo(ArticleCodeComponent);
