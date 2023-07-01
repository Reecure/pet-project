import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'app/providers/ReduxProvider/config/hooks';
import { isLoggedSelector } from 'enteties/User/model/selectors/isLoggedSelector';

const AppRouter = () => {
    const isLogged = useAppSelector(isLoggedSelector);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isLogged) {
            return false;
        }
        return true;
    }), [isLogged]);

    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('Loading')}</div>}>
            <Routes>
                {
                    routes.map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback="">
                                    {element}
                                </Suspense>
                            )}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
