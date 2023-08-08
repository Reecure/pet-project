import {useEffect} from 'react';
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

    const {id} = useParams();

    const profileData = useAppSelector(profileSelector);
    const profileLoading = useAppSelector(profileIsLoadingSelector);

    useEffect(() => {
        dispatch(getUserProfile(id)).unwrap().then((res) => {
            console.log("not error")
        }).catch(error => {
            console.log('error')
        });
    }, [dispatch, id]);

    if (profileLoading) {
        return (
            <div className={cls.loaderWrapper}>
                <Loader/>
            </div>
        );
    }

    if (!profileData) {
        return <div>{t('User is not found')}</div>;
    }

    return (
        <div className={cls.ProfilePageWrapper}>
            <div className={cls.ProfilePageContent}>
                <ProfileCard userInfo={profileData}/>
            </div>
        </div>
    );
};

export default ProfilePage;
