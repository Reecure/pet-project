## addComment Feature

----

### AddComment Component

The AddComment component is a functional component that allows users to add comments to an article. It includes a form
for entering and submitting comments.

#### Props:

The AddComment component doesn't accept any props explicitly.

#### Component Structure:

The AddComment component's structure consists of the following elements:

1. User Avatar: Displays the avatar of the currently logged-in user.
2. Comment Form: A form that allows users to enter and submit comments.
    - The form uses Formik for form management and validation.
    - The user can enter their comment and submit it.
    - Validation errors are displayed if the user doesn't enter a valid comment.
3. Submit Button: A button that users can click to submit their comment.

---

### Async Thunks Action

- `addComment` Async Thunk  
  The addComment async thunk is used to send a new comment to the server and update the state in Redux.

Workflow:

- Gets user data and article information from the Redux store.
- Sends a POST request to the server to add the comment.
- On success, dispatches the getCommentsByArticleId action to refresh the comments for the current article.
- On failure, returns an error message.

#### Parametrs

- `comment` (Type: `string`) The comment user send to DB
- `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and handle
  response

----

```tsx
import React from 'react';
import AddComment from './path/to/AddCommentComponent';

const ArticlePage = () => {
    // ... other code ...

    return (
        <div>
            {/* ... display article content ... */}

            <AddComment/>

            {/* ... display comments ... */}
        </div>
    );
};

export default ArticlePage;
```
