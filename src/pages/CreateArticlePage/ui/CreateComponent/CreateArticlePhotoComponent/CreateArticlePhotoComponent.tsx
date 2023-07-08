import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Input, ThemeInput } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import cls from './CreateArticlePhotoComponent.module.scss';

interface Props {
}

const CreateArticlePhotoComponent:FC<Props> = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CreateArticlePhotoComponent, {}, [])}>
            <Text title="Photo Block" />
            <div>
                src:
                <Input theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                title:
                <Input theme={ThemeInput.OUTLINE} />
            </div>
        </div>
    );
};

export default CreateArticlePhotoComponent;
