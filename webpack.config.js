const path = require('path')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const {CleanWebpackPlugin}  = require('clean-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugins')
// const HelloWorldPlugin = require('./src/plugins/hello-world-plugin');
const SetScriptTimestampPlugin = require('./src/plugins/SetScriptTimestampPlugin');
const No1WebpackPlugin = require('./src/plugins/No1-webpack-plugin');
const No2WebpackPlugin = require('./src/plugins/No2-webpack-plugin');
const FileListPlugin = require('./src/plugins/File-list-plugin');
const WatcherPlugin = require('./src/plugins/Watch-plugin');
const DecideHtmlPlugin = require('./src/plugins/Decide-html-plugin');
const MyCleanPlugin = require('./src/plugins/My-Clean-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ./webpack.config.js
/** @type {import('webpack').Configuration} */
module.exports = {
	entry: './src/main.js',
	// entry: ['./src/main.js', './src/style.css'],
	// entry: {
	// 	main: './src/main.js',
	// 	entry2: './src/entry2.js',
	// },
	// entry: './src/main.css',
	// 待打开
	// mode: 'none',
	// output: {
	// 	filename: 'bundle.js',
	// 	path: path.join(__dirname, 'dist'),
	// },
	// output: {
	// 	filename: '[name].[contenthash].js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: 'css-loader'
				// use: ['style-loader', 'css-loader'],
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.md$/,
				// use: './markdown-loader'
				use: ['html-loader', './markdown-loader'],
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		// new CleanWebpackPlugin(),
		// new MyCleanPlugin(),
		new HtmlWebpackPlugin({
			title: 'Webpack Plugin Sample111',
			// meta: {
			//   viewport: 'width=device-width'
			// }
			template: './src/index.html',
		}),
		new MyCleanPlugin({
			exclude: ['main.9a044b202d040a851973.js'],
		}),
		// new HelloWorldPlugin(),
		// new No1WebpackPlugin({ msg: 'good boy' }),
		// new No2WebpackPlugin({ msg: 'bad boy' }),
		// new FileListPlugin(),
		// new WatcherPlugin(),
		// new DecideHtmlPlugin(),
		// new SetScriptTimestampPlugin(),
		// new RemoveCommentsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css',
		}),
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
		open: true,
	},
	// devtool: 'source-map'
	// devtool: 'eval'
	// devtool: 'eval-source-map',
	optimization: {
		// 模块只导出被使用的成员
		usedExports: true,
		// 尽可能合并每一个模块到一个函数中
		concatenateModules: false,
		// 压缩输出结果
		minimize: false, // 默认true
	},
};
