import * as webpack from 'webpack';
import * as path from 'path';
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
