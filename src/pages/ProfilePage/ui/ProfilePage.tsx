import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileIsLoadingSelector } from 'enteties/Profile/selectors/profileIsLoadingSelector';
import { profileSelector } from 'enteties/Profile/selectors/profileSelector';
import { getUserProfile } from 'enteties/Profile/services/getUserProfile';
import React, { useEffect } from 'react';

type Props = {}

const ProfilePage = (props: Props) => {
    const dispatch = useAppDispatch();

    const profileData = useAppSelector(profileSelector);
    const profileLoading = useAppSelector(profileIsLoadingSelector);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    if (profileLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    return (
        <div>
            username:
            {' '}
            {profileData?.first}
        </div>
    );
};

export default ProfilePage;
