import {useTranslation} from 'react-i18next';
import {ChangeEvent, FC, useCallback, useEffect, useMemo,} from 'react';
import {BsFillGrid3X3GapFill} from 'react-icons/bs';
import {CiGrid2H} from 'react-icons/ci';
import {classNames} from '@/shared/lib/classNames';
import {useAppDispatch, useAppSelector} from '@/app/providers/ReduxProvider/config/hooks';
import {
    OrderType,
    resetPage,
    setQueryString,
    setSortByField,
    setSortByOrder,
    setSortByType,
    setViewType,
    sortFields,
    viewTypes,
} from '../../../model/slice/articlesSlice';
import {ArticleTypes} from '@/enteties/Article/model/types/article';
import {getAllArticles} from '../../../model/services/getArticles';
import {
    articlePageSelector,
    articleQuerySelector,
    articlesLimitSelector,
    articleTypesSelector,
} from '../../../model/selector/articlesSelector';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Input, ThemeInput} from '@/shared/ui/Input';
import cls from './ArticleHeader.module.scss';
import {useDebounce} from '@/shared/lib/hooks';

interface Props {
}

const options = [
    {
        name: 'By views asc',
        value: 'viewsAsc',
    },
    {
        name: 'By views desc',
        value: 'viewsDesc',
    },
];

const ArticleHeader: FC<Props> = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const query = useAppSelector(articleQuerySelector);
    const limit = useAppSelector(articlesLimitSelector);
    const page = useAppSelector(articlePageSelector);
    const types = useAppSelector(articleTypesSelector);

    const debouncedQuery = useDebounce(query, 500);

    const setBigArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.BIG));
            dispatch(resetPage());
            dispatch(getAllArticles());
        },
        [dispatch, limit],
    );

    const searchHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (page != 1) {
                dispatch(resetPage());
                dispatch(getAllArticles());
            }
            dispatch(setQueryString(e.currentTarget.value));
        },
        [dispatch],
    );

    useEffect(() => {
        dispatch(getAllArticles());
    }, [debouncedQuery, dispatch]);

    const setSmallArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.SMALL));
            dispatch(resetPage());
            dispatch(getAllArticles());
        },
        [dispatch, limit],
    );

    const setSortBy = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            switch (e.currentTarget.value) {
                case 'viewsAsc':
                    dispatch(setSortByOrder(OrderType.ASC));
                    dispatch(setSortByField(sortFields.VIEWS));
                    dispatch(resetPage());
                    dispatch(getAllArticles());
                    break;
                case 'viewsDesc':
                    dispatch(setSortByOrder(OrderType.DESC));
                    dispatch(setSortByField(sortFields.VIEWS));
                    dispatch(resetPage());
                    dispatch(getAllArticles());
                    break;
                default:
                    break;
            }
        },
        [dispatch],
    );

    const memoTypes = useMemo(() => Object.values(ArticleTypes).map((type) => (
        <p
            key={type}
            onClick={() => {
                dispatch(setSortByType(type));
                dispatch(resetPage());
                dispatch(getAllArticles());
            }}
            className={classNames(cls.type, {[cls.selected]: types.indexOf(type) !== -1}, [])}
        >
            {t(type)}
        </p>
    )), [dispatch, types]);

    return (
        <div className={classNames(cls.ArticleHeader, {}, [])}>
            <div className={cls.sortingWrapper}>
                <div className={cls.selectWrapper}>
                    <select defaultValue="Sort by" onChange={setSortBy} name={t('Sort by')}>
                        <option disabled selected hidden>{t('Sort by')}</option>
                        {
                            options.map((item) => <option value={item.value} key={item.value}>{t(item.name)}</option>)
                        }
                    </select>
                </div>
                <div>
                    <Button theme={ThemeButton.CLEAR} onClick={setBigArticles} className={cls.gridButton}>
                        <CiGrid2H/>
                    </Button>
                    <Button onClick={setSmallArticles} theme={ThemeButton.CLEAR} className={cls.gridButton}>
                        <BsFillGrid3X3GapFill/>
                    </Button>
                </div>
            </div>

            <div className={cls.inputWrapper}>
                <Input
                    theme={ThemeInput.OUTLINE}
                    placeholder={`${t('Search')}...`}
                    onChange={searchHandler}
                />
            </div>

            <div className={cls.types}>
                {
                    memoTypes
                }
            </div>
        </div>
    );
};

export default ArticleHeader;
