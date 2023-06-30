import React, {
    FC, memo, useCallback, useEffect, useState,
} from 'react';
import Modal from 'widgets/Modal/ui/Modal';
import Input from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { Button } from 'shared';

import { selectLoginField, setUserPassword, setUsername } from 'features/AuthByUsername/model/slice/loginSlice';
import { getUserByCredentials } from 'features/AuthByUsername/services/getUserByCredentials';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';

type Props = {
    isOpen: boolean
    setIsOpen: () => void
}

const LoginForm:FC<Props> = memo(({ isOpen, setIsOpen }) => {
    const [pendingButton, setpendingButton] = useState(false);

    useEffect(() => {
        console.log(pendingButton);
    }, [pendingButton]);

    const dispatch = useAppDispatch();

    const { password, username } = useAppSelector(selectLoginField);

    const setUsernameHandler = useCallback(
        (value) => {
            dispatch(setUsername(value));
        },
        [dispatch],
    );

    const setPasswordHandler = useCallback(
        (value) => {
            dispatch(setUserPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        async () => {
            setpendingButton(true);
            const res = await dispatch(getUserByCredentials({ password, username }));

            if (res.meta.requestStatus === 'fulfilled' && res.payload !== undefined) {
                setpendingButton(false);
                setIsOpen();
            }
        },
        [dispatch, password, username, setIsOpen],
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={classNames(cls.LoginForm, {}, [])}>
                <label>
                    <span>username:</span>
                    <Input onChange={(e) => setUsernameHandler(e.currentTarget.value)} value={username} />
                </label>
                <label>
                    <span>password:</span>
                    <Input onChange={(e) => setPasswordHandler(e.currentTarget.value)} value={password} />
                </label>
                <Button disabled={pendingButton} onClick={onLoginClick}>login</Button>
            </div>

        </Modal>
    );
});

export default LoginForm;
