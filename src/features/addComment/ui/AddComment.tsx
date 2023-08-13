import { useTranslation } from 'react-i18next';
import { FC, useState } from 'react';
import {
    ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { AiOutlineRight } from 'react-icons/ai';
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from '@/enteties/User';
import cls from './AddComment.module.scss';
import { addComment } from '../model/services/addComment';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

const SignupSchema = Yup.object().shape({
    comment: Yup.string().required('Should have 4 more symbols').min(4, 'Too short!!'),
});

interface Props {

}

const AddComment: FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const [serverError, setServerError] = useState(false);

    const currentUser = useAppSelector(userDataSelector);

    return (
        <div className={classNames(cls.AddComment, {}, [])}>
            {serverError && <Text haveError={serverError} text={t('Server error')} />}
            <div className={cls.contentWrapper}>
                <Avatar
                    src={currentUser.avatar}
                    size={35}
                />
                <Formik
                    initialValues={
                        { comment: '' }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={(values, formikHelpers) => {
                        dispatch(addComment(values.comment)).unwrap().then((res) => {
                            setServerError(false);
                        }).catch((error) => {
                            setServerError(true);
                        });
                    }}

                >
                    {({
                        values, errors, touched, handleChange,
                    }) => (

                        <Form className={cls.form}>

                            <label htmlFor="comment" className={cls.labelWrapper}>
                                <Field
                                    id="comment"
                                    name="comment"
                                    placeholder={`${t('Comment')}...`}
                                    className={cls.field}
                                />
                                <ErrorMessage component="div" className={cls.error} name="comment" />
                            </label>
                            <Button type="submit" theme={ThemeButton.OUTLINE}>
                                <AiOutlineRight />
                            </Button>

                        </Form>
                    )}
                </Formik>
            </div>
            <div className={cls.sendButton} />
        </div>
    );
};

export default AddComment;
