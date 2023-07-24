import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import React, {
    FC, useMemo, useState, useEffect,
} from 'react';
import { Text } from '@/shared/ui/Text';
import { Input, ThemeInput } from '@/shared/ui/Input';
import { useAppDispatch } from '@/app/providers/ReduxProvider/config/hooks';
import {
    setArticlePreviewImg, setArticleSubTitle, setArticleTitle, setArticleTypes,
} from '@/pages/CreateArticlePage/model/slice/addArticleSlice';
import { Menu } from '@headlessui/react';
import { ArticleTypes } from 'enteties/Article/model/types/article';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { ThemeContext } from '@/app/providers/ThemeProvider/lib/themeContext';
import { Notify } from '@/shared/ui/Notify';
import cls from './ArticlesAddHeader.module.scss';

interface Props {
}

const ArticlesAddHeader:FC<Props> = () => {
    const [articleTypes, setarticleTypes] = useState<string[]>([]);
    const [openNotify, setopenNotify] = useState(false);

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const deleteTypeHandler = (id: number) => {
        const updateArticleTypes = articleTypes.filter((item, i) => i !== id);
        setarticleTypes(updateArticleTypes);
        dispatch(setArticleTypes(updateArticleTypes));
    };

    const memoArticleTypes = useMemo(() => articleTypes.map((item, i) => (
        <div
            id={`articleTypeWrapper${i}`}
            onClick={() => deleteTypeHandler(i)}
            className={cls.articleTypeWrapper}
            onMouseEnter={() => (document.getElementById(`articleTypeWrapper${i}`).innerText = 'x')}
            onMouseLeave={() => (document.getElementById(`articleTypeWrapper${i}`).innerText = item)}
        >

            <p>{item}</p>
        </div>
    )), [articleTypes]);

    const onAddTypeHandler = (e: React.MouseEvent<HTMLParagraphElement>) => {
        if (articleTypes.indexOf(e.currentTarget.innerText) === -1) {
            const updatedBlocksTypes = [...articleTypes, e.currentTarget.innerText];
            setarticleTypes(updatedBlocksTypes);
            dispatch(setArticleTypes(updatedBlocksTypes));
        } else {
            setopenNotify(true);
            e.preventDefault();
        }
    };

    useEffect(() => {
        const notifyTimeout = setTimeout(() => {
            setopenNotify(false);
        }, 1500);

        return () => {
            clearTimeout(notifyTimeout);
        };
    }, [openNotify]);

    return (
        <div className={classNames(cls.ArticlesAddHeader, {}, [])}>
            <div>
                <Text title="Title" />
                <Input required onChange={(e) => { dispatch(setArticleTitle(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <Text title="Subtitle" />
                <Input required onChange={(e) => { dispatch(setArticleSubTitle(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <Text title="Img" />
                <Input required onChange={(e) => { dispatch(setArticlePreviewImg(e.currentTarget.value)); }} theme={ThemeInput.OUTLINE} />
            </div>
            <div>
                <div className={cls.articlesWrapper}>
                    {memoArticleTypes}
                </div>

                <Menu>
                    <Menu.Button>
                        <Button theme={ThemeButton.CLEAR}>Add Tags</Button>
                    </Menu.Button>
                    <Menu.Items className={cls.itemsWrapper}>
                        {
                            Object.values(ArticleTypes).map((type) => (
                                <Menu.Item key={type}>
                                    {({ active }) => (
                                        <p onClick={onAddTypeHandler} className={cls.item}>{type}</p>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </Menu.Items>

                </Menu>
            </div>
            <Notify open={openNotify}>This type is already in list</Notify>
        </div>
    );
};

export default ArticlesAddHeader;
