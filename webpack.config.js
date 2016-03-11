
import path from 'path';
import webpack from 'webpack';

export default {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'tests/spec'),
                ],
                loader: 'babel',
                query: {
                    presets: [
                        'es2015',
                        'stage-0',
                    ],
                    plugins: [
                        'babel-plugin-add-module-exports',
                        'transform-es2015-modules-commonjs',
                        'transform-object-assign',
                    ],
                },
            }
        ]
    },

    resolve: {
        root: __dirname,
        alias: {
            'zap-base-js-object': 'src/index.js',
        },
        modulesDirectories: [
            'node_modules',
            'src',
        ],
    },

    resolveLoader: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            'src',
        ],
    },
};
