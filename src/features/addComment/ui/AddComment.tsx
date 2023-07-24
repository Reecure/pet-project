import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, FC, useCallback } from 'react';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { ThemeButton } from '@/shared/ui/Button/ui/Button';
import { FaRegPaperPlane } from 'react-icons/fa';
import { addComment } from '../model/services/addComment';
import { setCommentText } from '../model/slice/addCommentSlice';
import { commentTextSelector } from '../model/selectors/commentTextSelector';

import cls from './AddComment.module.scss';

interface Props {

}

const AddComment:FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const selectCommentField = useAppSelector(commentTextSelector);
    const currentUser = useAppSelector(userDataSelector);

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
                        src={currentUser.avatar}
                        size={35}
                    />
                </div>
                <div className={cls.commentContent}>
                    <Input onChange={setCommentHandler} value={selectCommentField} className={cls.commentInput} />
                </div>
            </div>
            <div className={cls.sendButton}>
                <Button theme={ThemeButton.OUTLINE} onClick={addCommentHandler}><FaRegPaperPlane /></Button>
            </div>
        </div>
    );
};

export default AddComment;
