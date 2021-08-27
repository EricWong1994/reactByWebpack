const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module:{
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, 'css-loader'] // 采用link的方式引入样式
            },
            
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS
                }, {
                  loader: 'less-loader', // compiles Less to CSS
                 options: {
                   lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                //      modifyVars: {
                //        'primary-color': '#1DA57A',
                //        'link-color': '#1DA57A',
                //        'border-radius-base': '2px',
                //      },
                     javascriptEnabled: true,
                   }
                 }
                }]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                use: [{
                    loader:'url-loader',
                    options:{
                        // 通过`limit`指定进行base64编码的图片大小；只有小于指定字节（byte）的图片才会进行base64编码：
                        limit:10000,
                        outputPath:'static/images'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            } 
        ]
    }
}