import { FC, memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ImageBlock } from '@/enteties/Article/model/types/article';
import Image from '@/shared/ui/Image/Image';
import { Text } from '@/shared/ui/Text';
import { TextPosition } from '@/shared/ui/Text/ui/Text';
import cls from './ArticleImageComponent.module.scss';
import { Modal, ModalPositions } from '@/widgets/Modal';
import { TextSizes } from '@/shared/ui/Text/model/types';

interface Props {
    block: ImageBlock
}

const ArticleImageComponent: FC<Props> = ({ block }) => {
    const [popupOpen, setPopupOpen] = useState(false);

    const popupOpenHanler = () => {
        setPopupOpen((prev) => !prev);
    };
    return (

        <article className={classNames(cls.ArticleImageComponent, {}, [])}>
            <div>
                <div className={cls.ArticleImageWrapper}>
                    <Image onClick={popupOpenHanler} width={400} height={300} src={block.src} />
                </div>
            </div>
            <Text
                text={block.title}
                textPosition={TextPosition.CENTER}
                textSize={TextSizes.TEXTSM}
            />

            <Modal isOpen={popupOpen} setIsOpen={popupOpenHanler} childrenPosition={ModalPositions.CENTER}>
                <Image width={700} height={600} src={block.src} />
            </Modal>
        </article>
    );
};

export default memo(ArticleImageComponent);
