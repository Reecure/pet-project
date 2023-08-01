declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.png';
declare module '*.gif';
declare module '*.jpeg';
declare module '*.svg' {
    const content: any;
    export default content;
}

declare const __IS_DEV__: boolean;
