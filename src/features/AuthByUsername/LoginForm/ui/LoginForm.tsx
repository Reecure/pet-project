import React, { FC, useEffect, useState } from 'react';
import Modal from 'widgets/Modal/ui/Modal';
import Input from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { Button } from 'shared';
import { login, setPasswordForLogin, setUsernameForLogin } from 'enteties/User/model/slice/userSlice';
import { SelectIsLogged } from 'enteties/User/model/selectors/selectIsLogged';
import cls from './LoginForm.module.scss';

type Props = {
    isOpen: boolean
    setIsOpen: () => void
}

const LoginForm:FC<Props> = ({ isOpen, setIsOpen }) => {
    const dispatch = useAppDispatch();
    const loginHandler = () => {
        dispatch(login());
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={cls.LoginForm}>
                <label>
                    <span>username:</span>
                    <Input onChange={(e) => { dispatch(setUsernameForLogin(e.currentTarget.value)); }} />
                </label>
                <label>
                    <span>password:</span>
                    <Input onChange={(e) => { dispatch(setPasswordForLogin(e.currentTarget.value)); }} />
                </label>
                <Button onClick={loginHandler}>login</Button>
            </div>

        </Modal>
    );
};

export default LoginForm;
