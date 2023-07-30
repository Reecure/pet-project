import { setCommentText } from '@/features/addComment/model/slice/addCommentSlice';
import { addCommentReducer } from '@/features/addComment';

describe('addCommentSlice', () => {
    test('addCommentSlice test setCommentText', () => {
        const initialState = { text: '' };
        const newText = 'This is a test comment.';
        const action = setCommentText(newText);
        const state = addCommentReducer(initialState, action);

        expect(state.text).toBe(newText);
    });
});
