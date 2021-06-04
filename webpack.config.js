const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugins')
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
    new RemoveCommentsPlugin()
    // 用于生成 about.html
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // })
  ]
  // loader:
}
