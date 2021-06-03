const path = require('path');
const MiniCssExtractPLugin = require('mini-css-extract-plugin');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: [
                    MiniCssExtractPLugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.js', ',jsx'],
        alias: {
            "@component": path.resolve(__dirname, 'src/component'),
            "@styles": path.resolve(__dirname, 'src/styles')
        }
    },
    plugins: [
        new HtmlWebpackPLugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPLugin({
            filename: '[name].[contenthash].css'
        }),
        new Dotenv()
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        open: true,
        contentBase: path.join(__dirname, 'build'),
        port: 5000,
        host: '192.168.0.3'
    }
}