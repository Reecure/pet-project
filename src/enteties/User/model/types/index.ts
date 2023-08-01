import { COUNTRIES } from '@/enteties/Country/model/types/countries';
import { CURRENCIES } from '@/enteties/Currency/model/types/currencies';

export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
}

export interface User {
    id: string;
    first: string;
    lastname: string;
    age: string;
    roles: Roles[];
    currency: CURRENCIES;
    country: COUNTRIES;
    city: string;
    username: string;
    avatar: string;
}
