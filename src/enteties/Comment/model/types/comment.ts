import { User } from '@/enteties/User/model/types';

export interface IComment {
    id: string;
    user: User;
    text: string;
}
