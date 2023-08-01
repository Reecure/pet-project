import { Roles, User } from '@/enteties/User/model/types';
import userReducer, { initAuthData, logout, setAuthData } from './userSlice';
import { COUNTRIES } from '@/enteties/Country/model/types/countries';
import { CURRENCIES } from '@/enteties/Currency/model/types/currencies';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

interface State {
    userData: User;
    error: string | undefined;
    loading: boolean;
    isLogged: boolean;
}

const initialState: State = {
    userData: undefined,
    error: undefined,
    loading: false,
    isLogged: false,
};

describe('userSlice', () => {
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
    test('userSlice shoud handle auth', () => {
        const nextState = userReducer(initialState, setAuthData(mockUser));

        expect(nextState.userData).toEqual(mockUser);
        expect(nextState.isLogged).toBe(true);
    });

    test('should handle initAuthData when user exists in localStorage', () => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(mockUser));

        const nextState = userReducer(initialState, initAuthData());

        expect(nextState.userData).toEqual(mockUser);
        expect(nextState.isLogged).toBe(true);

        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    });

    test('should handle initAuthData when no user in localStorage', () => {
        const nextState = userReducer(initialState, initAuthData);

        expect(nextState.userData).toBeUndefined();
        expect(nextState.isLogged).toBe(false);
    });

    test('should handle logout', () => {
        const nextState = userReducer(initialState, logout());

        expect(nextState.userData).toBeUndefined();
        expect(nextState.isLogged).toBe(false);
    });

    test('setAuthData should create the correct action', () => {
        const action = setAuthData(mockUser);

        expect(action.type).toBe('user/setAuthData');
        expect(action.payload).toEqual(mockUser);
    });

    test('initAuthData should create the correct action', () => {
        const action = initAuthData();

        expect(action.type).toBe('user/initAuthData');
    });

    test('logout should create the correct action', () => {
        const action = logout();

        expect(action.type).toBe('user/logout');
    });
});
