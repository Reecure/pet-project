import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/ReduxProvider/config/store';

interface State {
    username: string,
    password: string
}

const initialState:State = {
    username: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setUserPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export default loginSlice.reducer;

export const { setUserPassword, setUsername } = loginSlice.actions;

export const selectLoginField = (state: RootState) => state.loginReducer;
