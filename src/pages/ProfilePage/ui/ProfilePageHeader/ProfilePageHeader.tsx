import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileReadOnlySelector } from 'enteties/Profile/selectors/profileReadOnlySelector';
import { updateUserProfile } from 'enteties/Profile/services/updateUserProfile';
import { canselEditing, setEditable } from 'enteties/Profile/slice/profileSlice';
import { FC, useCallback } from 'react';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import { User } from 'enteties/User/model/types';
import cls from './ProfilePageHeader.module.scss';

type Props = {
    userInfo: User;
};

const ProfilePageHeader: FC<Props> = ({ userInfo }) => {
    const { t } = useTranslation();

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
    }, [dispatch]);

    if (isReadOnly) {
        return <div className={cls.actionButtons}>{canEdit && <Button onClick={editHandler}>{t('Edit')}</Button>}</div>;
    }
    return (
        <div className={cls.actionButtons}>
            <Button theme={ThemeButton.OUTLINE_RED} onClick={canscelEditHandler}>
                {t('Cancel')}
            </Button>
            <Button className={cls.saveButton} onClick={saveEditHandler}>
                {t('Save')}
            </Button>
        </div>
    );
};

export default ProfilePageHeader;
