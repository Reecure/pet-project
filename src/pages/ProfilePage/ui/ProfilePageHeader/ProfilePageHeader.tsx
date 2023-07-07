import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileReadOnlySelector } from 'enteties/Profile/selectors/profileReadOnlySelector';
import { updateUserProfile } from 'enteties/Profile/services/updateUserProfile';
import { canselEditing, setEditable, updateProfile } from 'enteties/Profile/slice/profileSlice';
import React, { FC, useCallback } from 'react';
import { Button } from 'shared';
import { ThemeButton } from 'shared/ui/Button/Button';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { User } from 'enteties/User/model/slice/userSlice';
import cls from './ProfilePageHeader.module.scss';

type Props = {
    userInfo: User
}

const ProfilePageHeader:FC<Props> = ({ userInfo }) => {
    const dispatch = useAppDispatch();
    const isReadOnly = useAppSelector(profileReadOnlySelector);

    const currentUser = useAppSelector(userDataSelector);
    const canEdit = userInfo.id === currentUser.id;

    const editHandler = useCallback(() => {
        dispatch(setEditable());
    }, [dispatch]);

    const canscelEditHandler = useCallback(() => {
        dispatch(canselEditing());
    }, [dispatch]);

    const saveEditHandler = useCallback(() => {
        dispatch(updateUserProfile());
    }, [dispatch, currentUser]);

    if (isReadOnly) {
        return (
            <div className={cls.actionButtons}>
                <Button theme={ThemeButton.OUTLINE_RED} onClick={canscelEditHandler}>Cancel</Button>
                <Button className={cls.saveButton} onClick={saveEditHandler}>Save</Button>
            </div>
        );
    }

    return (
        <div className={cls.actionButtons}>
            {
                canEdit && <Button onClick={editHandler}>Edit</Button>
            }

        </div>
    );
};

export default ProfilePageHeader;
