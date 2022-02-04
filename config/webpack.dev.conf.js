module.exports = {
	mode: 'development',
	devServer: {
		host: 'localhost',
		// host: 'dev.lemon.baidu.com',
		port: '8080',
		open: true,
		hot: true,
	},
	devtool: 'cheap-module-eval-source-map',
};