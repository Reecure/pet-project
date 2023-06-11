import * as webpack from 'webpack';
import * as path from 'path';
import { BuildPath } from '../build/types/config';
import { cssLoader } from '../build/loaders/cssLoader';
import { svgLoader } from '../build/loaders/svgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule:webpack.RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.module.rules.push(svgLoader());
    config.module.rules.push(cssLoader(true));

    return config;
};
