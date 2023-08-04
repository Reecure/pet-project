import {useTranslation} from 'react-i18next';
import {FC, useEffect, useState,} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Article, BlockTypes} from '@/enteties/Article/model/types/article';
import Avatar from '@/shared/ui/Avatar/ui/Avatar';
import {getArticleRoute} from '@/shared/config/routeConfig/routeConfig';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Views} from '@/shared/ui/Views';
import cls from './ArticleBigComponent.module.scss';
import {useAppDispatch, useAppSelector} from "@/app/providers/ReduxProvider/config/hooks";
import {profileSelector} from "@/enteties/Profile/selectors/profileSelector";
import {getUserProfile} from "@/enteties/Profile/services/getUserProfile";
import {profileIsLoadingSelector} from "@/enteties/Profile/selectors/profileIsLoadingSelector";
import {AppLink} from "@/shared/ui/AppLink";

interface Props {
    article: Article
}

const ArticleBigComponent: FC<Props> = ({article}) => {
    const {t} = useTranslation();

    const [paragraph, setParagraph] = useState('');

    const user = useAppSelector(profileSelector)
    const loader = useAppSelector(profileIsLoadingSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUserProfile('1'))
    }, [dispatch])

    useEffect(() => {
        console.log(user)
    }, [user])

    useEffect(() => {
        const selectParagraph = (artic: Article) => artic?.blocks?.find((block) => {
            if (block.type === BlockTypes.TEXT) {
                setParagraph(block.paragraphs[0].text);
            }
        });
        selectParagraph(article);
    }, [article]);


    return (
        <div className={classNames(cls.ArticleBigComponent, {}, [])}>
            <div className={cls.ArticleBigComponentHeader}>
                <div className={cls.userInfoWrapper}>
                    <div className={cls.userInfo}>
                        <Avatar size={25} src={user?.avatar}/>
                        <p>{user?.username}</p>
                    </div>
                    <p>{article?.createdAt}</p>
                </div>
                <div className={cls.articleInfo}>
                    <p className={cls.articleTitle}>{article?.subtitle}</p>
                    <div className={cls.articleTypes}>{article?.type?.join(' ')}</div>
                </div>
            </div>
            <div className={cls.imageWrapper}>
                <img style={{height: 200, objectFit: 'cover'}} src={article?.img} alt="scs"/>

            </div>
            <div className={cls.ArticleBigComponentMain}>
                <p>
                    {
                        paragraph
                    }
                </p>
            </div>
            <div className={cls.ArticleBigComponentFooter}>
                <AppLink to={getArticleRoute(article.id)}>
                    <Button theme={ThemeButton.OUTLINE}>{t('Read more')}</Button>
                </AppLink>

                <Views views={article?.views}/>
            </div>
        </div>
    );
};

export default ArticleBigComponent;
