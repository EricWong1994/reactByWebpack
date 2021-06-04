const path = require('path')
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
  }
  // loader:
}
