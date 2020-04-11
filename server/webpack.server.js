const path = require('path');
const mergeConfig = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');

const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // check whether this can be made optional or not
        path: path.resolve(__dirname, 'build')
    }
};

module.exports = mergeConfig(webpackBaseConfig, config);