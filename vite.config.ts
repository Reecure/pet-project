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
        __API__: JSON.stringify('https://production-project-server-psi-ivory.vercel.app'),
        // 'https://production-project-server-psi-ivory.vercel.app'
        //http://localhost:8000
    },

});
