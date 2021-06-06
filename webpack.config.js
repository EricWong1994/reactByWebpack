const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugins')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// ./webpack.config.js
/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/main.js',
  // entry: './src/main.css',
  mode: 'none',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: 'css-loader'
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        // use: './markdown-loader'
        use: ['html-loader', './markdown-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample111',
      // meta: {
      //   viewport: 'width=device-width'
      // }
      template: './src/index.html'
    }),
    new RemoveCommentsPlugin(),
    // new CopyWebpackPlugin({
    //   // patterns: 'public' // 需要拷贝的目录或者路径通配符
    //   // patterns: ['public'] // 需要拷贝的目录或者路径通配符
    //   patterns: [{
    //     // from: './aaa/*.md',
    //     from: path.join(__dirname, 'aaa*.md'),
    //     to: path.join(__dirname, 'dist')
        
    //     // to: './dist/'
    //   }] // 需要拷贝的目录或者路径通配符
    // })

    // new CopyWebpackPlugin([
    //   // 'public'
    //   'aaa'
    // ])

    // 用于生成 about.html
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    contentBase: path.join(__dirname, './src'),
    // contentBase: path.join(__dirname, './aaa'),
    // compress: true,
    port: 9000,
    hot: true,
    // host: 'dev.lemon.baidu.com',
    open: true
  },
  // devtool: 'source-map'
  // devtool: 'eval'
  devtool: 'eval-source-map'
}
