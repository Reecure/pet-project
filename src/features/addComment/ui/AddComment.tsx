import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared';
import { ThemeButton } from 'shared/ui/Button/Button';
import Avatar from 'shared/ui/Avatar/Avatar';
import cls from './AddComment.module.scss';

interface Props {
}

const AddComment:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AddComment, {}, [])}>
            <div className={cls.contentWrapper}>
                <div className={cls.commentUserAvatar}>

                    <Avatar
                        src="https://e0.pxfuel.com/wallpapers/668/829/desktop-wallpaper-killua-zoldyck-killuazoldyck-hunterxhunter-killuazoldyck-hunterxhunterkillua-killua.jpg"
                        size={35}
                    />
                </div>
                <div className={cls.commentContent}>
                    <p>user name</p>
                    <Input className={cls.commentInput} />
                </div>
            </div>
            <div className={cls.sendButton}>
                <Button theme={ThemeButton.OUTLINE}>Send</Button>
            </div>
        </div>
    );
};

export default AddComment;
