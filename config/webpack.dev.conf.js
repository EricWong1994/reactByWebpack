const PUBLICPATH = '/assets/';

module.exports = {
	mode: 'development',
	devServer: {
		host: 'localhost',
		// host: 'dev.lemon.baidu.com',
		port: '8080',
		open: true,
		hot: true,
		// historyApiFallback: true,
		// proxy: {
		// 	'/': {
		// 		bypass: function (req, res, proxyOptions) {
		// 			console.log('Skipping proxy for browser request.');
		// 			return `${PUBLICPATH}/index.html`;
		// 		},
		// 	},
		// },
	},
	devtool: 'cheap-module-eval-source-map',
};
