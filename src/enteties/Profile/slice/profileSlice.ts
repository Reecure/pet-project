import { createSlice } from '@reduxjs/toolkit';
import { User } from 'enteties/User/model/slice/userSlice';
import { getUserProfile } from '../services/getUserProfile';

interface State {
    userInfo: User
    error: string,
    loading: boolean,
    readonly: boolean
}

const initialState:State = {
    userInfo: undefined,
    error: '',
    loading: false,
    readonly: true,

};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.loading = false;
        });
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = false;
        });
        builder.addCase(getUserProfile.pending, (state) => {
            state.loading = true;
        });
    },
});

export default profileSlice.reducer;
