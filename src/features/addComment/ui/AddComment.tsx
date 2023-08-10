import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import {
    ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { classNames } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { userDataSelector } from '@/enteties/User';
import cls from './AddComment.module.scss';
import { addComment } from '../model/services/addComment';
import { Button, ThemeButton } from '@/shared/ui/Button';

const SignupSchema = Yup.object().shape({
    comment: Yup.string().required('Should have 4 more symbols').min(4, 'Too short!!'),
});

interface Props {

}

const AddComment: FC<Props> = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector(userDataSelector);

    return (
        <div className={classNames(cls.AddComment, {}, [])}>
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
                            console.log('not error');
                        }).catch((error) => {
                            console.log('error');
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
                                <ErrorMessage name="comment" />
                            </label>
                            <Button type="submit" theme={ThemeButton.OUTLINE}>
                                {'>'}

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
