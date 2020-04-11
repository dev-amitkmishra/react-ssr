const path = require('path');

module.exports = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.client.js', // check whether this can be made optional or not
        path: path.resolve(__dirname, 'public')
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