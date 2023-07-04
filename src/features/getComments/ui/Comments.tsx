import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import Comment from 'enteties/Comment/ui/Comment';
import AddComment from 'features/addComment/ui/AddComment';
import { IComment } from 'enteties/Comment/model/types/comment';
import cls from './Comments.module.scss';

interface Props {
    comments: IComment[]
    isLoading: boolean
}

const Comments:FC<Props> = ({ comments, isLoading }) => {
    const { t } = useTranslation();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={classNames(cls.Comments, {}, [])}>
            <h3 className={cls.Title}>{t('Comments')}</h3>
            <AddComment />
            {
                comments.length
                    ? comments.map((comment) => <Comment comment={comment} key={comment.id} />) : <div>no comments</div>

            }
        </div>
    );
};

export default Comments;
