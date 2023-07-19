import { User } from 'enteties/User/model/types';

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

export enum BlockTypes {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}

export interface CodeBlock {
    id?: string;
    type?: BlockTypes.CODE;
    code: string;
}
interface Paragraph {
    id: string;
    text: string;
}

export interface TextBlock {
    id?: string;
    type?: BlockTypes.TEXT;
    title: string;
    paragraphs: Paragraph[];
}
export interface ImageBlock {
    id?: string;
    type?: BlockTypes.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlocks = CodeBlock | TextBlock | ImageBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    user: User;
    img: string;
    views: number;
    createdAt: string;
    type: string[];
    blocks: ArticleBlocks[];
}

export interface ArticleForSend {
    title: string;
    subtitle: string;
    img: string;
    views: number;
    type: string[];
    blocks: ArticleBlocks[];
}
