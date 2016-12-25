module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        [__dirname + '/../index', { atomicConfigPath: __dirname + '/atomic.js' }],
                    ]
                }
            }
        ]
    }
};
