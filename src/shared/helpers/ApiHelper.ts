import axios, { Method } from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localStorage';

// https://production-project-server-psi-ivory.vercel.app

// http://localhost:8000/

interface FetchDataOptions {
    method?: Method;
    data?: any;
    params?: any
}

export const fetchData = async (url: string, options: FetchDataOptions = {}): Promise<any> => {
    try {
        const { method = 'GET', data, params } = options;

        const headers = {
            authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
        };

        const response = await axios({
            method,
            // eslint-disable-next-line no-undef
            url: `${__API__}/${url}`,
            headers,
            data: method !== 'GET' ? data : undefined,
            params: method === 'GET' ? params : undefined,
        });
        return response.data;
    } catch (error) {
        console.error('Error while making request:', error);
        throw error;
    }
};

export default fetchData;
