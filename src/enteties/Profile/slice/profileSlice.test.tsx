import { Roles, User } from '@/enteties/User/model/types';
import { COUNTRIES } from '@/enteties/Country/model/types/countries';
import { CURRENCIES } from '@/enteties/Currency/model/types/currencies';
import { profileReducer } from '@/enteties/Profile';
import { profileSlice } from './profileSlice';
import { canselEditing, setEditable } from '@/enteties/Profile/slice/profileSlice';

const mockUser: User = {
    id: '1',
    avatar: '',
    age: '12',
    city: 'Kyiv',
    username: 'hahaUser',
    first: 'User',
    lastname: 'Admin',
    country: COUNTRIES.UKRAINE,
    currency: CURRENCIES.UAH,
    roles: [Roles.ADMIN, Roles.MANAGER],

};

const mockForm: User = {
    id: '1',
    avatar: '',
    age: '12',
    city: 'Kyiv',
    username: 'hahaUser',
    first: 'Admin',
    lastname: 'User',
    country: COUNTRIES.UKRAINE,
    currency: CURRENCIES.UAH,
    roles: [Roles.ADMIN, Roles.MANAGER],

};

interface State {
    userInfo: User;
    error: string;
    loading: boolean;
    readonly: boolean;
    form?: User;
}

const initialState: State = {
    userInfo: mockUser,
    error: '',
    loading: false,
    readonly: true,
};

describe('profileSlice', () => {
    test('profileSlice change profile should be true', () => {
        const newState = profileReducer(initialState, setEditable());

        expect(newState.readonly).toBe(false);
    });

    test('profileSlice cansel change profile', () => {
        const newState = profileReducer(initialState, canselEditing());

        expect(newState.userInfo).toEqual(mockUser);
    });

    test('profileSlice submit change profile', () => {
        const action = {
            type: profileSlice.actions.updateProfile,
            payload: {
                username: 'hahaUser',
                lastname: 'User',
            },
        };

        const newState = profileReducer(initialState, action);

        expect(newState.form).toEqual({
            username: 'hahaUser',
            lastname: 'User',
        });
    });
});
