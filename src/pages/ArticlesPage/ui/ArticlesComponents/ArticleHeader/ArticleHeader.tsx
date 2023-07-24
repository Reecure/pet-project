import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, FC, useCallback, useMemo,
} from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CiGrid2H } from 'react-icons/ci';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import {
    OrderType,
    resetPage,
    setSortByField,
    setSortByOrder,
    setSortByType,
    setViewType,
    sortFields,
    viewTypes,
} from '@/pages/ArticlesPage/model/slice/articlesSlice';
import { ArticleTypes } from '@/enteties/Article/model/types/article';
import { getAllArticles } from '@/pages/ArticlesPage/model/services/getArticles';
import { articleTypesSelector } from '@/pages/ArticlesPage/model/selector/articlesSelector';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Input, ThemeInput } from '@/shared/ui/Input';
import cls from './ArticleHeader.module.scss';

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
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const types = useAppSelector(articleTypesSelector);
    const setBigArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.BIG));
        },
        [dispatch],
    );

    const setSmallArticles = useCallback(
        () => {
            dispatch(setViewType(viewTypes.SMALL));
        },
        [dispatch],
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
            onClick={() => {
                dispatch(setSortByType(type));
                dispatch(getAllArticles());
            }}
            className={classNames(cls.type, { [cls.selected]: types.indexOf(type) !== -1 }, [])}
        >
            {type}
        </p>
    )), [dispatch, types]);

    return (
        <div className={classNames(cls.ArticleHeader, {}, [])}>
            <div className={cls.sortingWrapper}>
                <div className={cls.selectWrapper}>
                    <select onChange={setSortBy} name="Sort by">
                        <option disabled selected hidden>{t('Sort by')}</option>
                        {
                            options.map((item) => <option value={item.value} key={item.value}>{t(item.name)}</option>)
                        }
                    </select>
                </div>
                <div>
                    <Button theme={ThemeButton.CLEAR} onClick={setBigArticles}>
                        {' '}
                        <CiGrid2H />
                        {' '}
                    </Button>
                    <Button onClick={setSmallArticles} theme={ThemeButton.CLEAR}><BsFillGrid3X3GapFill /></Button>
                </div>
            </div>

            <div className={cls.inputWrapper}>
                <Input theme={ThemeInput.OUTLINE} placeholder={`${t('Search')}...`} />
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
