import { createSlice } from '@reduxjs/toolkit';
import { User } from 'enteties/User/model/slice/userSlice';
import { getUserProfile } from '../services/getUserProfile';
import { updateUserProfile } from '../services/updateUserProfile';

interface State {
    userInfo: User
    error: string,
    loading: boolean,
    readonly: boolean
    form?: User;
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
    reducers: {
        setEditable: (state) => {
            state.readonly = false;
        },
        canselEditing: (state) => {
            state.readonly = true;
            state.form = state.userInfo;
        },
        updateProfile: (state, action) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.form = action.payload;
                state.loading = false;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
            .addCase(getUserProfile.pending, (state) => {
                state.loading = true;
            });
    },
});

export default profileSlice.reducer;

export const { canselEditing, setEditable, updateProfile } = profileSlice.actions;
