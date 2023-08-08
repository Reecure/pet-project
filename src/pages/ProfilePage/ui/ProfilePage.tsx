import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {getUserProfile, profileIsLoadingSelector, profileSelector} from '@/enteties/Profile';
import {Loader} from '@/shared/ui/Loader';
import ProfileCard from './ProfileCard/ProfileCard';
import cls from './ProfilePage.module.scss';

type Props = {};

const ProfilePage = (props: Props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [updateServerError, setUpdateServerError] = useState(false)

    const [serverError, setServerError] = useState(false)
    const {id} = useParams();

    const profileData = useAppSelector(profileSelector);
    const profileLoading = useAppSelector(profileIsLoadingSelector);

    useEffect(() => {
        dispatch(getUserProfile(id)).unwrap().then((res) => {
            setServerError(false)
        }).catch(error => {
            setServerError(true)
        });
    }, [dispatch, id]);

    if (profileLoading) {
        return (
            <div className={cls.loaderWrapper}>
                <Loader/>
            </div>
        );
    }

    if (serverError) {
        return <p>Some server error</p>
    }

    if (!profileData) {
        return <div>{t('User is not found')}</div>;
    }

    return (
        <div className={cls.ProfilePageWrapper}>
            <div className={cls.ProfilePageContent}>
                {updateServerError && <p>Profile doesnt update some server error</p>}
                <ProfileCard userInfo={profileData} setUpdateServerError={setUpdateServerError}/>
            </div>
        </div>
    );
};

export default ProfilePage;
