## Article entity

----

### ArticleSlice - Redux Slice Definition

The `articleSlice` is a Redux slice that handles the state managment for retreiving and displaying an article.

#### State Structure

- `article` (type: `Article | undefined`) - the fetched article object or `undefined` if not article has been fetched
- `error` - a string containing error if article fetch an error
- `loading` - a boolean indicator when fetching article

#### Reducers (`extraReducers`)

- `getArticleById.fulfilled` - this reducer triggered when the article fetch is successfully.
- `getArticleById.pending` - this reducer triggered when the article fetch is pending.
- `getArticleById.rejected` - this reducer triggered when the article fetch is have an error.

---

### getArticleById - Async Thunk Action

This is an async thunk action created using the `createAsyncThunk` function from Redux Toolkit. It`s fetching the
article by ID from the remote API

#### Parametrs

- `id` (Type: `string`) The ID of the article to fetch
- `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and handle
  response

#### Actions

- If the fetch is `successful`, the action dispatches getArticleById. Fulfilled with the fetched article data.
- If the fetch is `pending`, the action dispatches getArticleById.pending.
- If the fetch is `rejected`, the action dispatches getArticleById.rejected with the error payload.

----

### Selectors

- `ArticleAllProps` - return all props {fields, loading, error }
- `ArticleFields ` - return an article
- `ArticleLoading` - return `true` if article is Loading and `false` if pending is end
- `ArticleError` - return the error property

----

### Usage example

```tsx
import {useSelector, useDispatch} from 'react-redux';
import {getArticleById, ArticleFields, ArticleLoading, ArticleError} from '@/entities/Article';

// Inside your component
const ArticleComponent = ({articleId}) => {
    const dispatch = useDispatch();

// Dispatch the async thunk to fetch the article
    useEffect(() => {
        dispatch(getArticleById(articleId));
    }, [articleId, dispatch]);

// Select data from Redux state
    const article = useSelector(ArticleFields);
    const loading = useSelector(ArticleLoading);
    const error = useSelector(ArticleError);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>{article?.title}</h2>
            <p>{article?.content}</p>
        </div>
    );
};
```
