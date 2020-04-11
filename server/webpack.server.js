const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', // check whether this can be made optional or not
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',// async handling
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]
    }
}