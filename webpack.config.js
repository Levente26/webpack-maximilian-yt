const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpeg|png|jpg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new htmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html',
            chunks: []
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ]
};