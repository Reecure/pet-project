import * as webpack from 'webpack';

import { BuildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';
import { svgLoader } from './loaders/svgLoader';

export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgloader = svgLoader();

    const styleLoader = cssLoader(option.isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [babelLoader, typescriptLoader, styleLoader, fileLoader, svgloader];
}
