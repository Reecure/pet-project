import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import {
    profileFormSelector, profileReadOnlySelector, setEditable, updateUserProfile,
} from '@/enteties/Profile';
import { Avatar } from '@/shared/ui/Avatar';
import { User } from '@/enteties/User/model/types';
import cls from './ProfileCard.module.scss';
import { userDataSelector } from '@/enteties/User';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { COUNTRIES } from '@/enteties/Country/model/types/countries';
import { CURRENCIES } from '@/enteties/Currency/model/types/currencies';

type Props = {
    userInfo: User;
    setUpdateServerError: (val: boolean) => void
};

const ProfileCard: FC<Props> = ({ userInfo, setUpdateServerError }) => {
    const { t } = useTranslation();
    const isReadOnly = useAppSelector(profileReadOnlySelector);

    const currentUser = useAppSelector(userDataSelector);
    const canEdit = userInfo.id === currentUser.id;

    const dispatch = useAppDispatch();

    const profileForm = useAppSelector(profileFormSelector);

    const validationSchema = Yup.object().shape({
        first: Yup.string().required('Field is required').min(2, 'Too Short!').max(25, 'Too long'),
        lastname: Yup.string().required('Field is required').min(2, 'Too Short!').max(25, 'Too long'),
        age: Yup.number().required('Field is required').min(18, 'Should be between 18 and 105').max(105, 'Should be between 18 and 105'),
        city: Yup.string().required('Field is required').min(2, 'Too Short!').max(25, 'Too long'),
        avatar: Yup.string().required('Field is required').url('Please enter a valid URL').required('Image URL is required'),
    });

    const submitHandler = (values: User) => {
        dispatch(updateUserProfile(values)).unwrap().then((res) => {
            setUpdateServerError(false);
        }).catch((error) => {
            setUpdateServerError(true);
        });
        dispatch(setEditable());
    };

    return (
        <div className={cls.ProfileCardWrapper}>
            <Formik
                validationSchema={validationSchema}
                initialValues={
                    {
                        id: profileForm.id,
                        username: profileForm.username,
                        first: profileForm?.first || '',
                        lastname: profileForm?.lastname || '',
                        age: profileForm?.age || '',
                        roles: profileForm.roles,
                        currency: profileForm?.currency,
                        country: profileForm?.country || '',
                        city: profileForm?.city || '',
                        avatar: userInfo?.avatar || '',

                    }
                }
                onSubmit={async (values: User, formikHelpers) => {
                    await submitHandler(values);
                }}
            >
                {({ errors, values, resetForm }) => (
                    <Form>
                        <div className={cls.actionButtons}>
                            {isReadOnly ? (
                                <div>
                                    {canEdit && (
                                        <Button
                                            theme={ThemeButton.OUTLINE}
                                            onClick={() => {
                                                dispatch(setEditable());
                                            }}
                                        >
                                            {t('Edit')}
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <Button type="submit" theme={ThemeButton.SUCCESS}>{t('Submit')}</Button>
                                    <Button
                                        theme={ThemeButton.OUTLINE_RED}
                                        type="button"
                                        onClick={() => {
                                            dispatch(setEditable());
                                            resetForm();
                                        }}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                </>
                            )}
                        </div>

                        <div className={cls.avatar}>
                            <Avatar src={userInfo?.avatar} />
                        </div>
                        <label htmlFor="first" className={cls.fieldWrapper}>
                            <span>
                                {t('Username')}
                                :
                            </span>
                            <Field
                                name="first"
                                readOnly={isReadOnly}
                                value={values.first}
                                className={cls.field}
                            />
                            <ErrorMessage name="first" component="div" className={cls.error} />
                        </label>
                        <label htmlFor="lastname" className={cls.fieldWrapper}>
                            <span>
                                {t('Lastname')}
                                :
                            </span>
                            <Field
                                name="lastname"
                                readOnly={isReadOnly}
                                value={values.lastname}
                                className={cls.field}
                            />
                            <ErrorMessage name="lastname" component="div" className={cls.error} />
                        </label>
                        <label htmlFor="age" className={cls.fieldWrapper}>
                            <span>
                                {t('Age')}
                                :
                            </span>
                            <Field
                                name="age"
                                readOnly={isReadOnly}
                                type="number"
                                value={values.age}
                                className={cls.field}
                            />
                            <ErrorMessage name="age" component="div" className={cls.error} />
                        </label>
                        <label htmlFor="city" className={cls.fieldWrapper}>
                            <span>
                                {' '}
                                {t('City')}
                                :
                            </span>
                            <Field
                                name="city"
                                readOnly={isReadOnly}
                                value={values.city}
                                className={cls.field}
                            />
                            <ErrorMessage name="city" component="div" className={cls.error} />
                        </label>

                        {
                            !isReadOnly && (
                                <label htmlFor="avatar" className={cls.fieldWrapper}>
                                    <span>
                                        {' '}
                                        {t('Avatar')}
                                        :
                                    </span>
                                    <Field
                                        name="avatar"
                                        readOnly={isReadOnly}
                                        value={values.avatar}
                                        className={cls.field}
                                    />
                                    <ErrorMessage name="avatar" component="div" className={cls.error} />
                                </label>
                            )
                        }
                        <div className={cls.selectorWrapper}>
                            {t('Country')}
                            :
                            <Field
                                as="select"
                                className={cls.select}
                                name="country"
                                disabled={isReadOnly}

                            >
                                <option value="" label={values.country} />
                                {Object.values(COUNTRIES).map((item) => (
                                    item !== values.country
                                    && (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    )
                                ))}
                            </Field>
                            <ErrorMessage name="currentCountry" component="div" className={cls.error} />
                        </div>
                        <div className={cls.selectorWrapper}>
                            {t('Currency')}
                            :
                            <Field
                                as="select"
                                className={cls.select}
                                name="currency"
                                disabled={isReadOnly}

                            >
                                <option value="" label={values.currency} />
                                {Object.values(CURRENCIES).map((item) => (
                                    item !== values.currency
                                    && (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    )
                                ))}
                            </Field>
                        </div>

                    </Form>
                )}

            </Formik>
            <div />
        </div>
    );
};

export default ProfileCard;
