const path = require('path');
const MiniCssExtractPLugin = require('mini-css-extract-plugin');
const HtmlWebpackPLugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
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
        new CleanWebpackPlugin(),
        new Dotenv()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizer()
        ]
    }
}