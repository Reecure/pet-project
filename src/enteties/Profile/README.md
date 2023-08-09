## Profile entity

----

### ProfileSlice - Redux Slice Definition

The profileSlice is a Redux slice that handles the state management for user profiles. It encompasses the user
information, editing mode, loading status, and potential form data for profile editing.

#### State Structure

- `userInfo` (Type: `User` | `undefined`): Represents the user's profile information or undefined if not available.
- `error` (Type: `string`): Holds an error message if fetching or updating the profile encounters an error.
- `loading` (Type: `boolean`): Indicates whether profile data is being loaded (true if loading, false if not).
- `readonly` (Type: `boolean`): Controls whether the profile is in read-only mode (true if read-only, false if
  editable).
- `form` (Type: User | `undefined`): Contains form data for profile editing, if applicable.

#### Actions

- `setEditable` - sets the readonly state property to toggle between read-only and editable profile mode.

#### Reducers (`extraReducers`)

- `getUserProfile.fulfilled` - this reducer triggered when the profile fetch is successfully.
- `getUserProfile.pending` - this reducer triggered when the profile fetch is pending.
- `getUserProfile.rejected` - this reducer triggered when the profile fetch is have an error.

---

### Async Thunks Action

- `getUserProfile` Async Thunk
    * Fetches user profile data based on the provided user ID.
    * If successful, updates the userInfo and form properties in the state.
    * If unsuccessful, sets the error property.
- `updateUserProfile` Async Thunk
    * Updates the user's profile data based on the provided form data.
    * If successful, returns the updated user profile data.
    * If unsuccessful, sets the error property.

#### Parametrs

- `id` (Type: `string`) The ID of the user to fetch
- `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and handle
  response

#### Actions

- If the fetch is `successful`, the action dispatches getUserProfile. Fulfilled with the fetched article data.
- If the fetch is `pending`, the action dispatches getUserProfile.pending.
- If the fetch is `rejected`, the action dispatches getUserProfile.rejected with the error payload.

----

### Selectors

- `profileSelector` - return userProfile information
- `profileReadOnlySelector ` - return can user edit his profile or not
- `profileIsLoadingSelector` - return `true` if article is Loading and `false` if pending is end
- `profileFormSelector` - return form for future editing user information

----

### Usage example

```tsx
import {useDispatch, useSelector} from 'react-redux';
import {setEditable, getUserProfile, updateUserProfile} from './path/to/profileSlice';
import {RootState} from './path/to/RootState'; // Import your RootState type

const UserProfile = () => {
    const dispatch = useDispatch();
    const {userInfo, error, loading, readonly, form} = useSelector((state: RootState) => state.profile);

    useEffect(() => {
        dispatch(getUserProfile('user123')); // Provide the user ID
    }, [dispatch]);

    const handleEditProfile = () => {
        dispatch(setEditable());
    };

    const handleSaveProfile = () => {
        dispatch(updateUserProfile(form));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>{userInfo?.name}'s Profile</h2>
            <div>
                <input type="text" value={form?.name} onChange={handleChange} disabled={readonly}/>
                <button onClick={handleEditProfile}>Edit</button>
                <button onClick={handleSaveProfile} disabled={readonly}>Save</button>
            </div>
        </div>
    );
};

export default UserProfile;
```
