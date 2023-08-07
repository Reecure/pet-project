import { useTranslation } from 'react-i18next';
import {
    ChangeEvent, FC, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './MyArticlesHeader.module.scss';
import { setSearchQuery } from '../../model/slice/myArticlesSlice';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { myArticlesQuerySelector } from '../../model/selectors/myArticlesSelectors';
import { getAllMyArticles } from '../../model/services/getMyArticles';
import { User } from '@/enteties/User/model/types';
import { useDebounce } from '@/shared/lib/hooks';

interface Props {
    user: User
}

const MyArticlesHeader: FC<Props> = ({ user }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const query = useAppSelector(myArticlesQuerySelector);

    const debouncedQuery = useDebounce(query, 500);

    const searchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.currentTarget.value));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllMyArticles(user.id));
    }, [dispatch, debouncedQuery]);

    return (
        <div className={classNames(cls.MyArticlesHeader, {}, [])} />
    );
};
export default MyArticlesHeader;
