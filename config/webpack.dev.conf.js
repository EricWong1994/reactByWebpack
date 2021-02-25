module.exports = {
    mode: 'development',
    devServer: {
        // host: 'localhost',
        host: 'dev.lemon.baidu.com',
        port: '8080',
        open: true,
        hot: true
    },
    // devtool: 'cheap-module-eval-source-map'
    devtool: 'source-map' // 会显示报错的行列信息：
    // devtool: 'cheap-source-map'
    // devtool: 'eval-source-map'
}