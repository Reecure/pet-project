import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { ImageBlock } from 'enteties/Article/model/types/article';
import Image from '@/shared/ui/Image/Image';
import Stack, { StackPosition } from '@/shared/ui/Stack/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextPosition } from '@/shared/ui/Text/ui/Text';
import cls from './ArticleImageComponent.module.scss';

interface Props {
    block: ImageBlock
}

const ArticleImageComponent: FC<Props> = ({ block }) => (
    <div className={classNames(cls.ArticleImageComponent, {}, [])}>
        <Stack childrenPosition={StackPosition.CENTER}>
            <Image width={400} height={300} src={block.src} />
        </Stack>
        <Text mainText={block.title} textPosition={TextPosition.CENTER} />
    </div>
);

export default memo(ArticleImageComponent);
