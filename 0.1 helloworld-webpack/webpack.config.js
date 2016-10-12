var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',    // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.html', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ])
    ],
    devServer: {
        port: 9500,
        host: 'localhost',
    }
}