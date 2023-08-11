import {useTranslation} from 'react-i18next';
import {ChangeEvent, FC, useCallback, useEffect,} from 'react';
import {classNames} from '@/shared/lib/classNames';
import cls from './MyArticlesPage.module.scss';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {userDataSelector} from '@/enteties/User';
import {getMyArticles, resetPage, setNextPage, setPrevPage, setSearchQuery,} from '../model/slice/myArticlesSlice';
import {getAllMyArticles} from '../model/services/getMyArticles';
import {
    myArticleHaveMoreLoading,
    myArticlePageLoading,
    myArticlePageSelector,
    myArticlesQuerySelector,
} from '../model/selectors/myArticlesSelectors';
import {Stack, StackPosition} from '@/shared/ui/Stack';
import MyArticleButtons from './MyArticleButtons/MyArticleButtons';
import UserHasntArticles from './UserHasntArticles/UserHasntArticles';
import {Input, ThemeInput} from '@/shared/ui/Input';
import {Button} from '@/shared/ui/Button';
import {useDebounce} from '@/shared/lib/hooks';
import {Loader} from '@/shared/ui/Loader';

interface Props {
}

const MyArticlesPage: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    const user = useAppSelector(userDataSelector);
    const articles = useAppSelector(getMyArticles.selectAll);
    const query = useAppSelector(myArticlesQuerySelector);
    const page = useAppSelector(myArticlePageSelector);
    const haveMore = useAppSelector(myArticleHaveMoreLoading);
    const isLoading = useAppSelector(myArticlePageLoading);

    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        dispatch(getAllMyArticles(user.id)).unwrap().then((res) => {
            console.log('not error');
        }).catch((error) => {
            console.log('error');
        });
    }, [dispatch, user, page]);

    useEffect(() => {
        dispatch(getAllMyArticles(user.id)).unwrap().then((res) => {
            console.log('not error');
        }).catch((error) => {
            console.log('error');
        });
        dispatch(resetPage());
    }, [dispatch, debouncedQuery]);

    const searchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.currentTarget.value));
    }, [dispatch]);

    const setNextPageHandler = () => {
        dispatch(setNextPage());
    };
    const setPrevPageHandler = () => {
        dispatch(setPrevPage());
    };

    return (
        <div data-testid='myArticlesPage' className={classNames(cls.MyArticlesPage, {}, [])}>
            <Input theme={ThemeInput.OUTLINE} onChange={searchHandler} placeholder="Search..." value={query}/>
            {isLoading ? (
                <div className={cls.loaderWrapper}>
                    <Loader/>
                </div>

            ) : (
                articles.length === 0 ? (<UserHasntArticles/>) : (
                    <div>
                        <div>
                            {articles.map((article) => (
                                <div key={article.id} className={cls.articleWrapper}>
                                    <div>
                                        {article.title}
                                    </div>
                                    <MyArticleButtons
                                        user={user}
                                        articleId={article.id}
                                        className={cls.articleButtonsWrapper}
                                    />
                                </div>
                            ))}
                        </div>
                        <Stack childrenPosition={StackPosition.RIGHT}>
                            <Button disabled={page <= 1} onClick={setPrevPageHandler}>{'<'}</Button>
                            <Button disabled={!haveMore} onClick={setNextPageHandler}>{'>'}</Button>
                        </Stack>

                    </div>
                )
            )}

        </div>
    );
};
export default MyArticlesPage;
