## getComments feature

----

### Comment Component

- Displays a list of comments for a specific article.
- Utilizes the getCommentsByArticleId async thunk to fetch comments.
- Renders individual Comment components for each comment received.
- Displays a loading spinner while comments are being fetched.

---

### Redux State Management

#### commentsSlice Slice:

- Manages the state of comments using Redux Toolkit.
- Handles the loading state, error state, and storing comment entities using createEntityAdapter.
- Utilizes async thunk actions to handle API requests and updates the state accordingly.

----

### Async Thunk

`getCommentsByArticleId` Async Thunk:

- Retrieves comments associated with a specific article ID from the server.
- Returns an array of comments on success.

----

```tsx
import React, {useEffect} from 'react';
import Comments from './path/to/CommentsComponent';
import {useAppDispatch, useAppSelector} from './path/to/ReduxProvider/config/hooks';
import {getCommentsByArticleId, getArticleComments} from './path/to/commentsSlice';

const ArticlePage = ({articleId}) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => getArticleComments(state));
    const isLoading = useAppSelector(state => state.commentsReducer.loading);

    useEffect(() => {
        // Fetch comments when the article page loads
        dispatch(getCommentsByArticleId(articleId));
    }, [dispatch, articleId]);

    return (
        <div>
            {/* ... display article content ... */}
            <Comments comments={comments} isLoading={isLoading}/>
        </div>
    );
};

export default ArticlePage;

```
