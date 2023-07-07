import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import CountriesDropDown from 'enteties/Country/ui/CountriesDropDown';
import CurrenciesDropDown from 'enteties/Currency/ui/CurrenciesDropDown';
import { profileFormSelector } from 'enteties/Profile/selectors/profileFormSelector';
import { profileReadOnlySelector } from 'enteties/Profile/selectors/profileReadOnlySelector';
import { updateProfile } from 'enteties/Profile/slice/profileSlice';
import { User } from 'enteties/User/model/slice/userSlice';
import React, { FC, useCallback, useEffect } from 'react';
import Avatar from 'shared/ui/Avatar/Avatar';
import Input from 'shared/ui/Input/Input';
import { userDataSelector } from 'enteties/User/model/selectors/userDataSelector';
import cls from './ProfileCard.module.scss';

type Props = {
    userInfo: User
}

const ProfileCard:FC<Props> = ({ userInfo }) => {
    const isReadOnly = useAppSelector(profileReadOnlySelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const profileForm = useAppSelector(profileFormSelector);

    const setUsernameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfile({ first: e.currentTarget.value }));
    }, [dispatch]);
    const setLastnameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfile({ lastname: e.currentTarget.value }));
    }, [dispatch]);
    const setAgeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfile({ age: e.currentTarget.value }));
    }, [dispatch]);
    const setCityHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfile({ city: e.currentTarget.value }));
    }, [dispatch]);
    const setAvatarHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateProfile({ avatar: e.currentTarget.value }));
    }, [dispatch]);

    const setCurrencyHandler = useCallback((value: string) => {
        dispatch(updateProfile({ currency: value }));
    }, [dispatch]);
    const setCountryHandler = useCallback((value: string) => {
        dispatch(updateProfile({ country: value }));
    }, [dispatch]);

    return (
        (
            <div className={cls.ProfileCardWrapper}>
                <div className={cls.avatar}>
                    <Avatar src={userInfo?.avatar} />
                </div>

                <div>
                    <label htmlFor="">
                        <span>Username:</span>
                        <Input readOnly={!isReadOnly} onChange={setUsernameHandler} value={profileForm?.first} placeholder={userInfo?.first} />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <span>Lastname:</span>
                        <Input
                            readOnly={!isReadOnly}
                            onChange={setLastnameHandler}
                            value={profileForm?.lastname}
                            placeholder={profileForm?.lastname}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <span>Age:</span>
                        <Input
                            readOnly={!isReadOnly}
                            type="number"
                            onChange={setAgeHandler}
                            value={profileForm?.age}
                            placeholder={profileForm?.age}
                        />
                    </label>
                </div>
                <div />
                <p>
                    Country:
                    <CountriesDropDown
                        setCurrentCountry={setCountryHandler}
                        canEdit={!isReadOnly}
                        defaultCountrie={userInfo?.country}
                    />
                </p>
                <label htmlFor="">
                    <span> City:</span>
                    <Input
                        readOnly={!isReadOnly}
                        onChange={setCityHandler}
                        value={profileForm?.city}
                        placeholder={userInfo?.city}
                    />
                </label>
                <p>
                    Currency:
                    <CurrenciesDropDown
                        setCurrentCurrency={setCurrencyHandler}
                        canEdit={!isReadOnly}
                        defaultCurrency={userInfo?.currency}
                    />
                </p>
                <label htmlFor="">
                    <span> Avatar:</span>
                    <Input
                        onChange={setAvatarHandler}
                        value={profileForm?.avatar}
                        readOnly={!isReadOnly}
                        placeholder={userInfo?.avatar}
                        className={cls.avatarInput}
                    />
                </label>

            </div>
        )
    );
};

export default ProfileCard;
