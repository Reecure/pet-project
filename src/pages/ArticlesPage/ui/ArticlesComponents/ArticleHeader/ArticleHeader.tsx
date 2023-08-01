import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, FC, useCallback, useMemo,
} from 'react';
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
            key={type}
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
                    <select defaultValue="Sort by" onChange={setSortBy} name="Sort by">
                        <option disabled selected hidden>{t('Sort by')}</option>
                        {
                            options.map((item) => <option value={item.value} key={item.value}>{t(item.name)}</option>)
                        }
                    </select>
                </div>
                <div>
                    <Button theme={ThemeButton.CLEAR} onClick={setBigArticles}>

                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M3 6.5C3 8.05556 3.5 9.41667 4 9.61111C4.5 9.80556 8 10 12 10C16 10 19.5 9.80555 20 9.61111C20.5 9.41667 21 8.05556 21 6.5C21 4.94444 20.5 3.58333 20 3.38889C19.5 3.19444 16 3 12 3C8 3 4.5 3.19444 4 3.38889C3.5 3.58333 3 4.94444 3 6.5Z"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3 17.5C3 19.0556 3.5 20.4167 4 20.6111C4.5 20.8056 8 21 12 21C16 21 19.5 20.8056 20 20.6111C20.5 20.4167 21 19.0556 21 17.5C21 15.9444 20.5 14.5833 20 14.3889C19.5 14.1944 16 14 12 14C8 14 4.5 14.1944 4 14.3889C3.5 14.5833 3 15.9444 3 17.5Z"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>

                    </Button>
                    <Button onClick={setSmallArticles} theme={ThemeButton.CLEAR}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M20 20L18.2678 18.2678M18.2678 18.2678C18.7202 17.8154 19 17.1904 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19C17.1904 19 17.8154 18.7202 18.2678 18.2678ZM15.6 10H18.4C18.9601 10 19.2401 10 19.454 9.89101C19.6422 9.79513 19.7951 9.64215 19.891 9.45399C20 9.24008 20 8.96005 20 8.4V5.6C20 5.03995 20 4.75992 19.891 4.54601C19.7951 4.35785 19.6422 4.20487 19.454 4.10899C19.2401 4 18.9601 4 18.4 4H15.6C15.0399 4 14.7599 4 14.546 4.10899C14.3578 4.20487 14.2049 4.35785 14.109 4.54601C14 4.75992 14 5.03995 14 5.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10ZM5.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V5.6C10 5.03995 10 4.75992 9.89101 4.54601C9.79513 4.35785 9.64215 4.20487 9.45399 4.10899C9.24008 4 8.96005 4 8.4 4H5.6C5.03995 4 4.75992 4 4.54601 4.10899C4.35785 4.20487 4.20487 4.35785 4.10899 4.54601C4 4.75992 4 5.03995 4 5.6V8.4C4 8.96005 4 9.24008 4.10899 9.45399C4.20487 9.64215 4.35785 9.79513 4.54601 9.89101C4.75992 10 5.03995 10 5.6 10ZM5.6 20H8.4C8.96005 20 9.24008 20 9.45399 19.891C9.64215 19.7951 9.79513 19.6422 9.89101 19.454C10 19.2401 10 18.9601 10 18.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14H5.6C5.03995 14 4.75992 14 4.54601 14.109C4.35785 14.2049 4.20487 14.3578 4.10899 14.546C4 14.7599 4 15.0399 4 15.6V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20Z"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    </Button>
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
