import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { profileIsLoadingSelector } from 'enteties/Profile/selectors/profileIsLoadingSelector';
import { profileSelector } from 'enteties/Profile/selectors/profileSelector';
import { getUserProfile } from 'enteties/Profile/services/getUserProfile';
import React, { useEffect } from 'react';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import { useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

type Props = {}

const ProfilePage = (props: Props) => {
    const dispatch = useAppDispatch();

    const { id } = useParams();

    const profileData = useAppSelector(profileSelector);
    const profileLoading = useAppSelector(profileIsLoadingSelector);
    useEffect(() => {
        dispatch(getUserProfile(id));
    }, [dispatch, id]);

    if (profileLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (!profileData) {
        return (
            <div>
                User is not found
            </div>
        );
    }

    return (
        <div className={cls.ProfilePageWrapper}>
            <div className={cls.ProfilePageContent}>
                <ProfilePageHeader userInfo={profileData} />
                <ProfileCard userInfo={profileData} />
            </div>
        </div>
    );
};

export default ProfilePage;
