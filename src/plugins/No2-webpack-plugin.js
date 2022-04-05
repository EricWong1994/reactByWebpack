function No2WebpackPlugin(options) {
	this.options = options;
}
No2WebpackPlugin.prototype.apply = function (compiler) {
	compiler.hooks.compile.tap('No2', () => {
		console.log('compile');
	});
	// compiler.hooks.compilation.tap('No2', () => {
	// 	console.log('compilation');
	// });
	compiler.hooks.compilation.tap('No2', compilation => {
		console.log('compilation');
		compilation.hooks.chunkAsset.tap('No2', (chunk, filename) => {
			// console.log(chunk);
			// console.log(filename);
		});
	});
	/*我们做了这么几件事：
    在Compiler的compilation钩子函数中，获取到Compilation对象
    之后对每一个Compilation对象调用它的chunkAsset钩子
    根据文档我们发现chunkAsset钩子是一个SyncHook类型的钩子，所以只能用tap去调用

    如果和我们猜测的一样，每个Compilation对象都对应着一个输出资源的话，那么当我们执行npm run build之后，控制台肯定会打印出两个chunk以及两个filename。
    一个是index.html，一个是main.bundle.js。
    */
};
module.exports = No2WebpackPlugin;

/* 当htmlWebpackPlugin不被注释时，
打印 compile
compilation
compilation
*/

/* 当htmlWebpackPlugin被注释时，
打印 compile
compilation
*/
