import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { CountriesDropDown } from '@/enteties/Country';
import { CurrenciesDropDown } from '@/enteties/Currency';
import { profileFormSelector, profileReadOnlySelector, updateProfile } from '@/enteties/Profile';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { User } from '@/enteties/User/model/types';
import cls from './ProfileCard.module.scss';

type Props = {
    userInfo: User;
};

const ProfileCard: FC<Props> = ({ userInfo }) => {
    const { t } = useTranslation();
    const isReadOnly = useAppSelector(profileReadOnlySelector);

    const dispatch = useAppDispatch();

    const profileForm = useAppSelector(profileFormSelector);

    const setUsernameHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateProfile({ first: e.currentTarget.value }));
        },
        [dispatch],
    );
    const setLastnameHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateProfile({ lastname: e.currentTarget.value }));
        },
        [dispatch],
    );
    const setAgeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateProfile({ age: e.currentTarget.value }));
        },
        [dispatch],
    );
    const setCityHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateProfile({ city: e.currentTarget.value }));
        },
        [dispatch],
    );
    const setAvatarHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateProfile({ avatar: e.currentTarget.value }));
        },
        [dispatch],
    );

    const setCurrencyHandler = useCallback(
        (value: string) => {
            dispatch(updateProfile({ currency: value }));
        },
        [dispatch],
    );
    const setCountryHandler = useCallback(
        (value: string) => {
            dispatch(updateProfile({ country: value }));
        },
        [dispatch],
    );

    return (
        <div className={cls.ProfileCardWrapper}>
            <div className={cls.avatar}>
                <Avatar src={userInfo?.avatar} />
            </div>

            <label htmlFor="username" className={cls.fieldWrapper}>
                <span>
                    {t('Username')}
                    :
                </span>
                <Input
                    name="username"
                    readOnly={isReadOnly}
                    onChange={setUsernameHandler}
                    value={profileForm?.first}
                    placeholder={userInfo?.first}
                />
            </label>

            <label htmlFor="lastname" className={cls.fieldWrapper}>
                <span>
                    {t('Lastname')}
                    :
                </span>
                <Input
                    name="lastname"
                    readOnly={isReadOnly}
                    onChange={setLastnameHandler}
                    value={profileForm?.lastname}
                    placeholder={profileForm?.lastname}
                />
            </label>

            <label htmlFor="age" className={cls.fieldWrapper}>
                <span>
                    {t('Age')}
                    :
                </span>
                <Input
                    name="age"
                    readOnly={isReadOnly}
                    type="number"
                    onChange={setAgeHandler}
                    value={profileForm?.age}
                    placeholder={profileForm?.age}
                />
            </label>

            <div />
            <div className={cls.selectorWrapper}>
                {t('Country')}
                :
                <CountriesDropDown
                    setCurrentCountry={setCountryHandler}
                    canEdit={isReadOnly}
                    defaultCountrie={userInfo?.country}
                />
            </div>
            <label htmlFor="city" className={cls.fieldWrapper}>
                <span>
                    {' '}
                    {t('City')}
                    :
                </span>
                <Input
                    name="city"
                    readOnly={isReadOnly}
                    onChange={setCityHandler}
                    value={profileForm?.city}
                    placeholder={userInfo?.city}
                />
            </label>
            <div className={cls.selectorWrapper}>
                {t('Currency')}
                :
                <CurrenciesDropDown
                    setCurrentCurrency={setCurrencyHandler}
                    canEdit={isReadOnly}
                    defaultCurrency={userInfo?.currency}
                />
            </div>
            <label htmlFor="avatar" className={cls.fieldWrapper}>
                <span>
                    {' '}
                    {t('Avatar')}
                    :
                </span>
                <Input
                    name="avatar"
                    onChange={setAvatarHandler}
                    value={profileForm?.avatar}
                    readOnly={isReadOnly}
                    placeholder={userInfo?.avatar}
                    className={cls.avatarInput}
                />
            </label>
        </div>
    );
};

export default ProfileCard;
