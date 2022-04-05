// SetScriptTimestampPlugin.js

class SetScriptTimestampPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap(
			'SetScriptTimestampPlugin',
			(compilation, callback) => {
				console.log('SetScriptTimestampPlugin!');
				// compilation.plugin(
				// 	'html-webpack-plugin-before-html-processing',
				// 	function (htmlPluginData, callback) {
				// 		let jsScr = htmlPluginData.assets.js[0];
				// 		console.log('jsScr: ', jsScr);
				// 	}
				// );
				compilation.hooks.emit.tap(
					'html-webpack-plugin-before-html-processing',
					function (htmlPluginData, callback) {
						let jsScr = htmlPluginData.assets.js[0];
						console.log('jsScr: ', jsScr);
					}
				);
			}
		);
	}
}
// class SetScriptTimestampPlugin {
// 	apply(compiler) {
// 		compiler.hooks.done.tap(
// 			'SetScriptTimestampPlugin',
// 			(compilation, callback) => {
// 				console.log('SetScriptTimestampPlugin!');
// 			}
// 		);
// 	}
// }
module.exports = SetScriptTimestampPlugin;
