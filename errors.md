Plugin could not be registered at 'html-webpack-plugin-before-html-processing'. Hook was not found.
BREAKING CHANGE: There need to exist a hook at 'this.hooks'. To create a compatibility layer for this hook, hook into 'this._pluginCompat'.
(node:13212) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(Use `node --trace-deprecation ...` to show where the warning was created)

				compilation.plugin(
					'html-webpack-plugin-before-html-processing',
					function (htmlPluginData, callback) {
						let jsScr = htmlPluginData.assets.js[0];
						console.log('jsScr: ', jsScr);
					}
				);

执行该代码时报错


2、Browserslist: caniuse-lite is outdated. Please run: npx browserslist@latest --update-db
3、"global-prefix" is empty.


4 TypeError: Invalid value used in weak set
原因："mini-css-extract-plugin": "^2.6.0",
    at WeakSet.add (<anonymous>)
    at MiniCssExtractPlugin.apply (/Users/wangshihao/Desktop/github/reactByWebpack/node_modules/mini-css-extract-plugin/dist/index.js:640:18)