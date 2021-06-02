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

let resolve = (q) => {
    // let qqq = path.resolve(__dirname, '../', q);
    let qqq = path.join(__dirname, '..', q);
    console.log('qqq', qqq); // qqq /Users/v_wangshihao01/Desktop/gitgubDemo/openClass/openClassPage/node_modules/vue/dist/vue.esm.js
    return qqq;
};
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
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 'vue': resolve('node_modules/vue/dist/vue.ems.js')
            // 'vue': resolve('node_modules/vue/dist/vue.esm.js')
            'react': resolve('node_modules/react/index.js')
            // '@': resolve('src')
        }
    },
}
module.exports = env => {
    let config = env === 'production'?productionConfig:developmentConfig;
    return merge(defaultConfig,moduleConfig,config)
}