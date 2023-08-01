import { setUsername, setUserPassword } from '@/features/AuthByUsername/model/slice/loginSlice';
import { loginReducer } from '@/features/AuthByUsername';

describe('', () => {
    test('', () => {
        const initialState = { username: '', password: '' };
        const newUserName = 'admin';

        const actionWithName = setUsername(newUserName);

        const state = loginReducer(initialState, actionWithName);

        expect(state.username).toBe(newUserName);
    });

    test('', () => {
        const initialState = { username: '', password: '' };
        const userPassword = '123';

        const actionWithPassword = setUserPassword(userPassword);

        const state = loginReducer(initialState, actionWithPassword);

        expect(state.password).toBe(userPassword);
    });
});
