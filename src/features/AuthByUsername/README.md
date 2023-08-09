## AuthByUserEntity feature

----

### LoginForm Component

The LoginForm component provides a user interface for logging in using a username and password. It includes input fields
for entering credentials and a login button.

#### Props:

- `isOpen` (Type: `boolean`): Indicates whether the login form modal is open.
- `setIsOpen` (Type: () => `void`): Callback function to close the login form modal.

---

### Async Thunks Action

- `getUserProfile` Async Thunk

#### Workflow:

- Users enter their username and password.
- When the login button is clicked, the onLoginClick function is triggered.
- The getUserByCredentials async thunk is dispatched, sending the credentials to the server.
- If authentication is successful, the modal is closed (setIsOpen is called).
- If authentication fails, an error message is displayed.

#### Parametrs

- `authData` (Type: `string`) fields with userName and password for auth
- `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and handle
  response

----

### Usage example

```tsx
import React, {useState} from 'react';
import LoginForm from './path/to/LoginFormComponent';

const LoginPage = () => {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const openLoginForm = () => {
        setIsLoginFormOpen(true);
    };

    const closeLoginForm = () => {
        setIsLoginFormOpen(false);
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <button onClick={openLoginForm}>Login</button>
            <LoginForm isOpen={isLoginFormOpen} setIsOpen={closeLoginForm}/>
        </div>
    );
};

export default LoginPage;

```
