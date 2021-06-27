let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let merge = require('webpack-merge');
let productionConfig = require('./webpack.prod.conf');
let developmentConfig = require('./webpack.dev.conf');
let moduleConfig = require('./webpack.module.conf');

/** @type {import('webpack').Configuration} */
let defaultConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: '[name].[hash:8].js'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, '../', 'src/components'),
            // '@': path.resolve('../', 'src/components')
        },
        extensions:['.js','.jsx','.json']  // 表示这几个文件的后缀名可以省略不写
    }
}
module.exports = env => {
    let config = env === 'production'?productionConfig:developmentConfig;
    return merge(defaultConfig,moduleConfig,config)
}