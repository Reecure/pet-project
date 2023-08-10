import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: '@', replacement: '/src'},
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        //@ts-ignore
        __API__: JSON.stringify(import.meta.env.VITE_API_URL || 'http://localhost:8000')
    },

});
