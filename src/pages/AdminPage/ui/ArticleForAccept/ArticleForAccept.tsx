import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticleForAccept.module.scss'
import {FC} from 'react';
import {Button, ThemeButton} from "@/shared/ui/Button";

interface Props {
}

const ArticleForAccept: FC<Props> = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ArticleForAccept, {}, [])}>
            <div>Article name</div>
            <div className={cls.buttonsWrapper}>
                <Button theme={ThemeButton.OUTLINE}>Preview</Button>
                <Button theme={ThemeButton.OUTLINE}>Accept</Button>
                <Button theme={ThemeButton.OUTLINE_RED}>Decline</Button>
            </div>
        </div>
    );
};
export default ArticleForAccept;