## CRUDArticle feature

-----

### ArticleForm Component

The ArticleForm component is used to create or edit an article. It provides a form for entering article details,
including title, subtitle, image URL, views, type, and blocks.

#### Props:

- `article` (Type: `ArticleForSend` | `undefined`): Optional initial article data for editing.
- `loading` (Type: `boolean`): Indicates whether the form is in a loading state.
- `onSubmit` (Type: (`values`: ArticleForSend) => `void`): Callback function to handle form submission.
- `submitError` (Type: `boolean`): Indicates whether a submission error has occurred.

----

### Async Thunks Action

- `addArticle` Async Thunk:
    * Creates a new article and sends it to the server.
    * Retrieves user data from the Redux store using userDataSelector.
    * Returns the newly created article on success.

- `deleteArticle` Async Thunk:
    * Deletes an article from the server.
    * Requires the article's id.
    * Returns a success response on successful deletion.

- `updateArticle` Async Thunk:
    * Updates an existing article on the server.
    * Requires the updated article data (article) and the article's id.
    * Retrieves user data from the Redux store using userDataSelector.
    * Returns the updated article on success.

#### Parametrs

- `addArticle`
    * `article` (Type: `ArticleForSend`) The article fields to send
    * `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and
      handle
      response

- `deleteArticle`
    * `id` (Type: `string`) The article id to delete
    * `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and
      handle
      response
- `updateArticle`
    * { article: `ArticleForSend`, id : `string`} the id and fields of articles to update
    * `thunkApi` (Type: `object`) The thunkAPI parameter provider by RTK which can be used to dispatch actions and
      handle
      response

---

### Usage example

```tsx
import React from 'react';
import ArticleForm from './path/to/ArticleFormComponent';

const AddArticlePage = () => {
    const handleSubmit = (articleData) => {
        // Handle article creation here
        console.log('Article data:', articleData);
    };

    return (
        <div>
            <h1>Add Article</h1>
            <ArticleForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default AddArticlePage;
```
