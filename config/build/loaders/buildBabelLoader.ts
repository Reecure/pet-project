export const buildBabelLoader = (isTSX: boolean) => (
    {
        test: isTSX ? /\.(?:jsx|tsx)$/ : /\.(?:js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', { targets: 'defaults' }]],
                plugins: [
                    ['@babel/plugin-transform-typescript',
                        {
                            isTSX,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                ],
            },

        },
    }
);
