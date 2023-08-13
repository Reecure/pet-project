import {FC, memo, useCallback, useState,} from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {selectLoginField, setUsername, setUserPassword} from '../../model/slice/loginSlice';
import {getUserByCredentials} from '@/features/AuthByUsername';
import {classNames} from '@/shared/lib/classNames';
import {Text} from '@/shared/ui/Text';
import {Input, ThemeInput} from '@/shared/ui/Input';
import {Button} from '@/shared/ui/Button';
import {Modal, ModalPositions} from '@/widgets/Modal';
import cls from './LoginForm.module.scss';
import {TextPosition} from "@/shared/ui/Text/ui/Text";
import {FontWeight, TextSizes} from "@/shared/ui/Text/model/types";

type Props = {
    isOpen: boolean
    setIsOpen: () => void
}

const LoginForm: FC<Props> = ({isOpen, setIsOpen}) => {
    const {t} = useTranslation();

    const [pendingButton, setpendingButton] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const dispatch = useAppDispatch();

    const {password, username} = useAppSelector(selectLoginField);

    const setUsernameHandler = useCallback(
        (value: string) => {
            dispatch(setUsername(value));
        },
        [dispatch],
    );

    const setPasswordHandler = useCallback(
        (value: string) => {
            dispatch(setUserPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        async () => {
            setpendingButton(true);
            const res = await dispatch(getUserByCredentials({password, username}));

            if (res.meta.requestStatus === 'fulfilled' && res.payload !== undefined) {
                setpendingButton(false);
                setLoginError(false);
                setIsOpen();
            }
            if (res.payload === undefined) {
                setpendingButton(false);
                setLoginError(true);
            }

            setpendingButton(false);
        },
        [dispatch, password, username, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} childrenPosition={ModalPositions.CENTER}>
            <div className={classNames(cls.LoginForm, {}, [])}>
                <Text
                    textPosition={TextPosition.CENTER}
                    text={t('Login Form')}
                    fontWeight={FontWeight.FONTBOLD}
                    textSize={TextSizes.TEXT2XL}

                />
                <Text
                    text={`${loginError ? t('Something went wrong') : ''}`}
                    haveError={loginError}
                />
                <label className={cls.labelWrapper}>
                    <span>
                        {t('Username')}
                        :
                    </span>
                    <Input
                        onChange={(e) => setUsernameHandler(e.currentTarget.value)}
                        value={username}
                        theme={ThemeInput.BORDER_BOTTOM}

                    />
                </label>
                <label className={cls.labelWrapper}>
                    <span>
                        {t('Password')}
                        :
                    </span>
                    <Input
                        type="password"
                        onChange={(e) => setPasswordHandler(e.currentTarget.value)}
                        value={password}
                        theme={ThemeInput.BORDER_BOTTOM}
                    />
                </label>
                <Button disabled={pendingButton} onClick={onLoginClick}>{t('Login')}</Button>
            </div>

        </Modal>
    );
};

export default memo(LoginForm);
