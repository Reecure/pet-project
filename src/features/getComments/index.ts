import commentsReducer from './model/slice/commentsSlice';
import { getCommentsByArticleId } from './model/services/getCommentsByArticleId';
import Comments from './ui/Comments';
import { commentisLoading } from './model/selectors/commentPropsSelector';

export {
    commentsReducer, getCommentsByArticleId, Comments, commentisLoading,
};
