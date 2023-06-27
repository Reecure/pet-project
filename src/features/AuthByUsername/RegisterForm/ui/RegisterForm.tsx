import React, { FC, useEffect, useState } from 'react';
import Modal from 'widgets/Modal/ui/Modal';
import Input from 'shared/ui/Input/Input';
import { User } from 'enteties/User/model/slice/userSlice';
import { Button } from 'shared';
import cls from './RegisterForm.module.scss';

type Props = {
    isOpen: boolean
    setIsOpen: () => void
}

const RegisterForm:FC<Props> = ({ isOpen, setIsOpen }) => {
    const [user, setUser] = useState<User>({ username: '', email: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [activeButton, setActiveButton] = useState(true);
    const [successRegisterMessage, setSuccessRegisterMessage] = useState('');

    const registerHandler = () => {
        const userExist = localStorage.getItem('user');
        if (userExist) {
            setSuccessRegisterMessage('user exist');
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            setSuccessRegisterMessage('Registration was success');
        }
    };

    useEffect(() => {
        if (user.password.length > 8 && user.password === confirmPassword) {
            setActiveButton(false);
        }
    }, [user, confirmPassword]);

    return (

        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={cls.RegisterForm}>
                <label>
                    <span>username: </span>
                    <Input onChange={(e) => { setUser({ ...user, username: e.currentTarget.value }); }} />
                </label>
                <label>
                    <span>email: </span>
                    <Input onChange={(e) => { setUser({ ...user, email: e.currentTarget.value }); }} />
                </label>
                <label>
                    <span>password: </span>
                    <Input onChange={(e) => { setUser({ ...user, password: e.currentTarget.value }); }} />
                </label>
                <label>
                    <span>confirm password: </span>
                    <Input onChange={(e) => { setConfirmPassword(e.currentTarget.value); }} />
                </label>
                <span>{successRegisterMessage}</span>
                <Button disabled={activeButton} onClick={registerHandler}>register</Button>
            </div>
        </Modal>
    );
};

export default RegisterForm;
