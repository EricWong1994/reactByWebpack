let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
let merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { DuplicatesPlugin } = require("inspectpack/plugin");
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();
let productionConfig = require('./webpack.prod.conf');
let developmentConfig = require('./webpack.dev.conf');
let moduleConfig = require('./webpack.module.conf');

const NODE_ENV = process.env.NODE_ENV;

/** @type {import('webpack').Configuration} */
let defaultConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: NODE_ENV === 'production' ? '[name].[contenthash:10].js' : '[name].[hash:10].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new DashboardPlugin(), // 打包分析
        new MiniCssExtractPlugin(), // css抽离
        new OptimizeCssPlugin(), // css代码压缩
        new DuplicatesPlugin({
            verbose: true
        })
        // new DuplicatesPlugin({
        //     // Emit compilation warning or error? (Default: `false`)
        //     emitErrors: false,
        //     // Handle all messages with handler function (`(report: string)`)
        //     // Overrides `emitErrors` output.
        //     emitHandler: undefined,
        //     // List of packages that can be ignored. (Default: `[]`)
        //     // - If a string, then a prefix match of `{$name}/` for each module.
        //     // - If a regex, then `.test(pattern)` which means you should add slashes
        //     //   where appropriate.
        //     //
        //     // **Note**: Uses posix paths for all matching (e.g., on windows `/` not `\`).
        //     ignoredPackages: undefined,
        //     // Display full duplicates information? (Default: `false`)
        //     verbose: false
        // })
        // new DashboardPlugin({port: 9090})
    ],
    resolve: {
        // modules: ['../src/components', '../node_modules'], // no
        // modules: ['../src/components', 'node_modules'], // yes
        modules: [path.resolve(__dirname, '../', 'src/components'), 'node_modules'], // yes
        alias: {
            '@components': path.resolve(__dirname, '../', 'src/components'),
            // '@': path.resolve('../', 'src/components')
        },
        extensions:['.js','.jsx','.json']  // 表示这几个文件的后缀名可以省略不写
    },
    optimization: {
        // mergeDuplicateChunks: true // 默认为true
    }
}
module.exports = env => {
    let config = NODE_ENV === 'production' ? productionConfig : developmentConfig;
    return merge(defaultConfig, moduleConfig, config)
}
// module.exports = env => {
//     let config = env === 'production' ? productionConfig : developmentConfig;
//     return merge(defaultConfig, moduleConfig, config)
// }