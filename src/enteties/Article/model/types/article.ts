import { User } from 'enteties/User/model/slice/userSlice';

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
    Science = 'Science',
    Education = 'Education',
    Economics = 'Economics',
    Mathematics = 'Mathematics',
    Physics = 'Physics',
    Psychology = 'Psychology',
    Languages = 'Languages',
    Programming = 'Programming',
    WebDevelopment = 'Web Development',
    MobileDevelopment = 'Mobile Development',
    DataScience = 'Data Science',
    MachineLearning = 'Machine Learning',
    Blockchain = 'Blockchain',
}

export type ArticleBlocks = CodeBlock | TextBlock | ImageBlock

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    user: User,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleTypes[],
    blocks: ArticleBlocks[]
}
