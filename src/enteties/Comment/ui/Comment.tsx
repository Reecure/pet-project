import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import cls from './Comment.module.scss';
import { IComment } from '../model/types/comment';

interface Props {
    comment:IComment
}

const Comment:FC<Props> = ({ comment }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Comment, {}, [])}>
            <div className={cls.commentUserAvatar}>

                <Avatar
                    src={comment.user.avatar}
                    size={35}
                />
            </div>
            <div className={cls.commentContent}>
                <p>{comment.user.username}</p>
                <p>{comment.text}</p>
            </div>
        </div>
    );
};

export default Comment;
