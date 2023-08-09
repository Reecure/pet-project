## Comment entity

----

### Comment component

The Comment component is a functional component (FC stands for Function Component) that is used to render a single
comment. It displays information about a user's comment, including their avatar, username, and comment text.

#### Props

- comment (Type: `IComment`) - An object representing the comment to be displayed

---

### IComment Interface

The IComment interface defines the structure of the comment object that is passed as a prop to the Comment component.

### Properties:

- `id` (Type: `string`): The unique identifier of the comment.
- `user` (Type: `User`): An object representing the user who made the comment. The structure of the User object is
  defined
  elsewhere.
- `text` (Type: `string`): The text content of the comment.

----

### Usage example

```tsx
import React from 'react';
import Comment from './path/to/CommentComponent';
import {User} from './path/to/UserInterface'; // Import the User interface

// Assume you have a User interface defined
const user: User = {
    id: 'user123',
    username: 'exampleUser',
    avatar: 'path/to/avatar.png',
};

const comment = {
    id: 'comment456',
    user: user,
    text: 'This is a sample comment.',
};

const App = () => {
    return (
        <div>
            <Comment comment={comment}/>
        </div>
    );
};

export default App;
```
