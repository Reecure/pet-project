import {FC, memo} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './Text.module.scss';
import {FontWeight, TextSizes} from "@/shared/ui/Text/model/types";

export enum TextPosition {
    CENTER = 'center',
    RIGHT = 'right'
}

interface Props {
    className?: string
    text?: string
    textSize?: TextSizes,
    fontWeight?: FontWeight
    haveError?: boolean
    textPosition?: TextPosition
}

const Text: FC<Props> = ({

                             haveError, className, textPosition, textSize, text, fontWeight
                         }) => (
    <div data-testid="text" className={classNames(cls.Text, {}, [])}>
        <p
            data-testid="text-error"
            className={classNames(cls.mainText, {[cls.error]: haveError}, [className, cls[textPosition]])}
            style={{
                fontWeight: fontWeight || 400,
                fontSize: textSize || '16px'
            }}
        >
            {text}
        </p>
    </div>
);

export default memo(Text);
