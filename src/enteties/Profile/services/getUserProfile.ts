import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

export const getUserProfile = createAsyncThunk('profile/getUserProfile', async () => {
    try {
        const res = await axios.get('http://localhost:8000/profile', {
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
    }
});
