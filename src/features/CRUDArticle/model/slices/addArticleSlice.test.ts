import {
    ArticleBlocks, BlockTypes, CodeBlock, ImageBlock, TextBlock,
} from '@/enteties/Article/model/types/article';
import {
    setArticleBlocks,
    setArticlePreviewImg,
    setArticleSubTitle,
    setArticleTitle,
    setArticleTypes,
} from '@/features/CRUDArticle/model/slices/addArticleSlice';
import { addArticleReducer } from '@/features/CRUDArticle';

describe('addArticleSlice', () => {
    interface Props {
        title: string,
        subtitle: string,
        img: string,
        views: number,
        type: string[],
        blocks: ArticleBlocks[]
    }

    const initialState: Props = {
        title: '',
        subtitle: '',
        img: '',
        views: 0,
        type: [],
        blocks: [],
    };

    const newImgBlock: ImageBlock = {
        id: '1', src: '//some-src.com', type: BlockTypes.IMAGE, title: 'my img',
    };

    const newTextBlock: TextBlock = {
        id: '1',
        type: BlockTypes.TEXT,
        title: 'my-title',
        paragraphs: [{ id: '1', text: 'p1' }, { id: '2', text: 'p2' }],
    };

    const newCodeBlock: CodeBlock = {
        id: '1', type: BlockTypes.CODE, code: '<div>', lines: 3,
    };

    test('addArticleSlice set title', () => {
        const newTitle = 'Title';

        const actionWithTitle = setArticleTitle(newTitle);

        const state = addArticleReducer(initialState, actionWithTitle);

        expect(state.title).toBe(newTitle);
    });

    test('addArticleSlice set subTitle', () => {
        const newSubTitle = 'subTitle';

        const actionWithSubTitle = setArticleSubTitle(newSubTitle);

        const state = addArticleReducer(initialState, actionWithSubTitle);

        expect(state.subtitle).toBe(newSubTitle);
    });

    test('addArticleSlice set image', () => {
        const newImg = '/to-img.com';

        const actionWithImage = setArticlePreviewImg(newImg);

        const state = addArticleReducer(initialState, actionWithImage);

        expect(state.img).toBe(newImg);
    });

    test('addArticleSlice set types', () => {
        const newTypes = ['Test', 'Test1', 'Test2'];

        const actionWithTypes = setArticleTypes(newTypes);

        const state = addArticleReducer(initialState, actionWithTypes);

        expect(state.type).toBe(newTypes);
    });

    test('addArticleSlice set blocks CODE_BLOCK', () => {
        const actionWithBlocks = setArticleBlocks([newCodeBlock]);

        const state = addArticleReducer(initialState, actionWithBlocks);

        expect(state.blocks).toContain(newCodeBlock);
    });

    test('addArticleSlice set blocks IMG_BLOCK', () => {
        const actionWithBlocks = setArticleBlocks([newImgBlock]);

        const state = addArticleReducer(initialState, actionWithBlocks);

        expect(state.blocks).toContain(newImgBlock);
    });

    test('addArticleSlice set blocks CODE_BLOCK', () => {
        const actionWithBlocks = setArticleBlocks([newTextBlock]);

        const state = addArticleReducer(initialState, actionWithBlocks);

        expect(state.blocks).toContain(newTextBlock);
    });

    test('addArticleSlice set blocks check 1more block', () => {
        const actionWithBlocks = setArticleBlocks([newTextBlock, newCodeBlock, newImgBlock]);

        const state = addArticleReducer(initialState, actionWithBlocks);

        expect(state.blocks).toEqual([newTextBlock, newCodeBlock, newImgBlock]);
    });
});
