import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './MainContent.module.scss'
import {FC} from 'react';
import {Text} from "@/shared/ui/Text";

interface Props {
}

const MainContent: FC<Props> = () => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.MainContent, {}, [])}>
            <Text title={'Recommendation Articles'}/>
            <Text title={'New Articles'}/>
        </div>
    );
};
export default MainContent;