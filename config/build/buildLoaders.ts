import * as webpack from 'webpack';

import { BuildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';
import { svgLoader } from './loaders/svgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(option: BuildOptions, isTSX?: boolean): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = buildBabelLoader(isTSX = false);
    const tsxBabelLoader = buildBabelLoader(isTSX = true);

    const svgloader = svgLoader();

    const styleLoader = cssLoader(option.isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };
    return [codeBabelLoader, tsxBabelLoader, styleLoader, fileLoader, svgloader];
}
