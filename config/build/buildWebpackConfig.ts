import {BuildOptions} from './types/config';
import {buildPlugins} from './buildPlugins';
import {buildResolvers} from './buildResolvers';
import {buildLoaders} from './buildLoaders';
import {buildDevServer} from './buildDevServer';

export function BuildWebpackConfig(options: BuildOptions) {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            publicPath: '/',
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}
