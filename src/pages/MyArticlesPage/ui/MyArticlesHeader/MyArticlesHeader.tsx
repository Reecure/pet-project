import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './MyArticlesHeader.module.scss'
import {ChangeEvent, FC, useCallback, useEffect} from 'react';
import {setSearchQuery} from "@/pages/MyArticlesPage/model/slice/myArticlesSlice";
import {useAppDispatch, useAppSelector} from "@/app/providers/ReduxProvider/config/hooks";
import {myArticlesQuerySelector} from "@/pages/MyArticlesPage/model/selectors/myArticlesSelectors";
import {useDebounce} from "@/shared/lib/useDebounce/useDebounce";
import {getAllMyArticles} from "@/pages/MyArticlesPage/model/services/getMyArticles";
import {User} from "@/enteties/User/model/types";

interface Props {
    user: User
}

const MyArticlesHeader: FC<Props> = ({user}) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const query = useAppSelector(myArticlesQuerySelector)

    const debouncedQuery = useDebounce(query, 500);

    const searchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.currentTarget.value))
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllMyArticles(user.id));
    }, [dispatch, debouncedQuery]);

    return (
        <div className={classNames(cls.MyArticlesHeader, {}, [])}>
        </div>
    );
};
export default MyArticlesHeader;