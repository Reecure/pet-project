import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import {getProfileRoute} from '@/shared/config/routeConfig/routeConfig';
import {AppLink} from '@/shared/ui/AppLink';
import cls from './Comment.module.scss';
import {IComment} from '../model/types/comment';

interface Props {
    comment: IComment
}

const Comment: FC<Props> = ({comment}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Comment, {}, [])}>
            <AppLink to={getProfileRoute(comment.user.id)} className={cls.commentUserAvatar}>
                <Avatar
                    src={comment.user.avatar}
                    size={35}
                />
            </AppLink>
            
            <div className={cls.commentContent}>
                <AppLink to={getProfileRoute(comment.user.id)}>{comment.user.username}</AppLink>
                <p>{comment.text}</p>
            </div>
        </div>
    );
};

export default Comment;
