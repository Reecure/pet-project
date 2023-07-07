import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import Avatar from 'shared/ui/Avatar/ui/Avatar';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
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
                <AppLink to={`${RoutePath.profile}${comment.user.id}`}>{comment.user.username}</AppLink>
                <p>{comment.text}</p>
            </div>
        </div>
    );
};

export default Comment;
