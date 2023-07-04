import { User } from 'enteties/User/model/slice/userSlice';

export interface IComment {
    id: string,
    user: User,
    text: string
}
