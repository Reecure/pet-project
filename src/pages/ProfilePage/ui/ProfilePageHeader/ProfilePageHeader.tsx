import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileReadOnlySelector } from 'enteties/Profile/selectors/profileReadOnlySelector';
import { updateUserProfile } from 'enteties/Profile/services/updateUserProfile';
import { canselEditing, setEditable, updateProfile } from 'enteties/Profile/slice/profileSlice';
import React, { useCallback } from 'react';
import { Button } from 'shared';
import { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ProfilePageHeader.module.scss';

type Props = {}

const ProfilePageHeader = (props: Props) => {
    const dispatch = useAppDispatch();
    const isReadOnly = useAppSelector(profileReadOnlySelector);

    const editHandler = useCallback(() => {
        dispatch(setEditable());
    }, [dispatch]);

    const canscelEditHandler = useCallback(() => {
        dispatch(canselEditing());
    }, [dispatch]);

    const saveEditHandler = useCallback(() => {
        dispatch(updateUserProfile());
    }, [dispatch]);

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
            <Button onClick={editHandler}>Edit</Button>

        </div>
    );
};

export default ProfilePageHeader;
