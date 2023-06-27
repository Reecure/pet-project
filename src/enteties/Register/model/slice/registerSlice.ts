import { createSlice } from '@reduxjs/toolkit';
import { User } from 'enteties/User/model/slice/userSlice';

interface Props {
    user:User
}

const initialState:Props = {
    user: {
        username: '',
        email: '',
        password: '',
    },
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {

    },
});
