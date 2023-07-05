import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, FC, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import { Button } from 'shared';
import { ThemeButton } from 'shared/ui/Button/Button';
import Avatar from 'shared/ui/Avatar/Avatar';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import cls from './AddComment.module.scss';
import { addComment } from '../model/services/addComment';
import { setCommentText } from '../model/slice/addCommentSlice';
import { commentTextSelector } from '../model/selectors/commentTextSelector';

interface Props {
}

const AddComment:FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const selectCommentField = useAppSelector(commentTextSelector);

    const setCommentHandler = useCallback(
        (e:ChangeEvent<HTMLInputElement>) => {
            dispatch(setCommentText(e.currentTarget.value));
        },
        [dispatch],
    );

    const addCommentHandler = useCallback(
        () => {
            dispatch(addComment(selectCommentField));
        },
        [dispatch, selectCommentField],
    );

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
                    <Input onChange={setCommentHandler} value={selectCommentField} className={cls.commentInput} />
                </div>
            </div>
            <div className={cls.sendButton}>
                <Button theme={ThemeButton.OUTLINE} onClick={addCommentHandler}>Send</Button>
            </div>
        </div>
    );
};

export default AddComment;
