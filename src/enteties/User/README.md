## User entity

----

### UserSlice - Redux Slice Definition

The userSlice is a Redux slice that manages user authentication-related state. It handles user authentication data,
loading status, and user login/logout actions.

#### State Structure

- `userData` (Type: `User` | `undefined`): Represents the user's authentication data or undefined if not authenticated.
- `error` (Type: `string` | `undefined`): Holds an error message if an authentication action encounters an error.
- `loading` (Type: `boolean`): Indicates whether authentication data is being processed (true if loading, false if not).
- `isLogged` (Type: `boolean`): Indicates whether a user is currently logged in (true if logged in, false if not).

#### Actions

- `setAuthData`: Sets the userData and marks the user as logged in (isLogged becomes true).
- `initAuthData`: Initializes the userData from local storage if available, marking the user as logged in.
- `logout`: Logs out the user by resetting the userData and isLogged properties, and removing data from local storage.

----

### Selectors

- `userRolesSelector`- Selects the roles array from the user data in the state.
- `isAdmin`- Checks if the user has an "ADMIN" role.
- `isManager`- Checks if the user has a "MANAGER" role.
- `userDataSelector`- Selects the entire user data object.
- `isLoggedSelector`- Selects the isLogged property.

----

### Usage example

```tsx
import {useSelector, useDispatch} from 'react-redux';
import {setAuthData, initAuthData, logout} from './path/to/userSlice';
import {isAdmin, isManager, userDataSelector, isLoggedSelector} from './path/to/selectors';
import {RootState} from './path/to/RootState'; // Import your RootState type
import {Roles} from './path/to/types'; // Import your Roles type

const App = () => {
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);
    const isLogged = useSelector(isLoggedSelector);
    const isAdminUser = useSelector(isAdmin);
    const isManagerUser = useSelector(isManager);

    useEffect(() => {
        // Initialize authentication data from local storage
        dispatch(initAuthData());
    }, [dispatch]);

    const handleLogin = () => {
        const mockUser = {id: 'user123', name: 'John Doe', roles: [Roles.USER]};
        dispatch(setAuthData(mockUser));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            {isLogged ? (
                <div>
                    <h2>Welcome, {userData?.name}!</h2>
                    {isAdminUser && <p>You have admin privileges.</p>}
                    {isManagerUser && <p>You have manager privileges.</p>}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please log in</h2>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default App;
```
