import {useTranslation} from 'react-i18next';
import {FC, JSX, memo} from 'react';
import cls from './SvgIcon.module.scss';

interface Props {
    Svg: JSX.Element
}

const SvgIcon: FC<Props> = ({Svg}) => {
    const {t} = useTranslation();
    return (
        <div className={cls.svgIcon}>
            {!!Svg && Svg}
        </div>

    );
};
export default memo(SvgIcon);
