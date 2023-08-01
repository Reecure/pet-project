import { RootState } from '@/app/providers/ReduxProvider/config/store';
import { Roles } from '../types';

export const userRolesSelector = (state: RootState) => state.user.userData?.roles || [];

export const isAdmin = (state: RootState) => {
    const userRoles = userRolesSelector(state);
    return userRoles.includes(Roles.ADMIN);
};

export const isManager = (state: RootState) => {
    const userRoles = userRolesSelector(state);
    return userRoles.includes(Roles.MANAGER);
};
