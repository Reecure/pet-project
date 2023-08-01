import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isLoggedSelector } from '@/enteties/User/model/selectors/isLoggedSelector';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/hooks';
import { Loader } from '@/shared/ui/Loader';
import { userRolesSelector } from '@/enteties/User/model/selectors/userRoleSelector';

const AppRouter = () => {
    const isLogged = useAppSelector(isLoggedSelector);
    const userRoles = useAppSelector(userRolesSelector);

    const routes = useMemo(
        () => Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isLogged) {
                return false;
            }
            if (route.roles && route.roles.length > 0) {
                // Check if the user has at least one of the required roles
                const hasRequiredRole = route.roles.some((requiredRole) => userRoles.includes(requiredRole));
                if (!hasRequiredRole) {
                    return false;
                }
            }
            return true;
        }),
        [isLogged, userRoles],
    );

    const { t } = useTranslation();
    return (
        <Suspense
            fallback={(
                <div>
                    <Loader />
                </div>
            )}
        >
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={<Suspense fallback="">{element}</Suspense>} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
