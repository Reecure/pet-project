import {useTranslation} from 'react-i18next';
import {FC} from 'react';
import {ErrorMessage, Field, Form, Formik,} from 'formik';
import * as Yup from 'yup';
import {classNames} from '@/shared/lib/classNames';
import {Avatar} from '@/shared/ui/Avatar';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {userDataSelector} from '@/enteties/User';
import cls from './AddComment.module.scss';
import {addComment} from '../model/services/addComment';
import {Button, ThemeButton} from '@/shared/ui/Button';

const SignupSchema = Yup.object().shape({
    comment: Yup.string().required('Should have 4 more symbols').min(4, 'Too short!!'),
});

interface Props {

}

const AddComment: FC<Props> = () => {
    const {t} = useTranslation();

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
                        {comment: ''}
                    }
                    validationSchema={SignupSchema}
                    onSubmit={(values, formikHelpers) => {
                        dispatch(addComment(values.comment));
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
                                    placeholder={t("Comment") + '...'}
                                    className={cls.field}
                                />
                                <ErrorMessage name="comment"/>
                            </label>
                            <Button type="submit" theme={ThemeButton.OUTLINE}>
                                {'>'}

                            </Button>

                        </Form>
                    )}
                </Formik>
            </div>
            <div className={cls.sendButton}/>
        </div>
    );
};

export default AddComment;
// <svg
//     viewBox="0 0 32 32"
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
// >
//     <g id="SVGRepo_bgCarrier" strokeWidth="0" />
//     <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
//     <g id="SVGRepo_iconCarrier">
//
//         <g id="paperplane" clipPath="url(#clip-paperplane)">
//             <g
//                 id="Group_1662"
//                 data-name="Group 1662"
//                 transform="translate(-416 -468)"
//             >
//                 <g id="Group_1661" data-name="Group 1661">
//                     <g id="Group_1660" data-name="Group 1660">
//                         <path
//                             id="Path_3709"
//                             data-name="Path 3709"
//                             d="M447.642,468.358a1,1,0,0,0-1.107-.21L416.666,481.16a1,1,0,0,0-.039,1.815l8.389,4.071,1.752,6.337c0,.01.013.015.017.025a.489.489,0,0,0,.15.23l.009.005c.005,0,.012.006.018.01a.5.5,0,0,0,.288.1h.018a.5.5,0,0,0,.18-.044c.014-.006.026-.016.04-.023a.526.526,0,0,0,.126-.1c.007-.008.017-.01.024-.019l1.594-1.958,3.792,7.766a1,1,0,0,0,.9.561h.021a1,1,0,0,0,.9-.6l13.012-29.869A1,1,0,0,0,447.642,468.358ZM442,472.306l-16.355,12.847-6.194-3.024Zm-1.324,2.312-12.637,12.637a.507.507,0,0,0-.137.254l-.726,3.591-1.335-4.83Zm-11.817,13.231-.007.011v0Zm-.716,3.513.284-1.4.322.659Zm5.729,5.188-4.5-9.214,15.085-15.085Z"
//                         />
//                     </g>
//                 </g>
//             </g>
//         </g>
//     </g>
// </svg>
