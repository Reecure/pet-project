export enum BlockTypes {
    TEXT = 'TEXT',
    IMAGE ='IMAGE',
    CODE = 'CODE'
}

export interface CodeBlock {
    id: string,
    type: BlockTypes.CODE,
    code: string
}
export interface TextBlock {
    id: string,
    type: BlockTypes.TEXT,
    title: string,
    paragraphs: string[]

}
export interface ImageBlock {
    id: string
    type: BlockTypes.IMAGE
    src: string
    title: string
}

export enum ArticleTypes {
    IT = 'IT',
    Science = 'Science'
}

export type ArticleBlocks = CodeBlock | TextBlock | ImageBlock

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleTypes,
    blocks: ArticleBlocks[]
}
