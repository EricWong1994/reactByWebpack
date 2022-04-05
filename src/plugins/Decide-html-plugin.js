function DecideHtmlPlugin() {}

DecideHtmlPlugin.prototype.apply = function (compiler) {
	compiler.hooks.afterPlugins.tap('DecideHtmlPlugin', compiler => {
		const plugins = compiler.options.plugins;
		// console.log('plugins: ', plugins);
		const hasHtmlPlugin = plugins.some(plugin => {
			// console.log('plugin.__proto__: ', plugin.__proto__); {}
			// console.log(
			// 	'plugin.__proto__.constructor: ',
			// 	plugin.__proto__.constructor
			// );
			// [class CleanWebpackPlugin] [class HtmlWebpackPlugin]
			return plugin.__proto__.constructor.name === 'HtmlWebpackPlugin';
		});
		if (hasHtmlPlugin) {
			console.log('使用了html-webpack-plugin');
		}
	});
};

module.exports = DecideHtmlPlugin;
