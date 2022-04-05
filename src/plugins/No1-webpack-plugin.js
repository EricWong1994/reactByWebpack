// // 1. 创建一个构造函数
// function No1WebpackPlugin (options) {
//   this.options = options
// }
// // 2. 重写构造函数原型对象上的 apply 方法
// No1WebpackPlugin.prototype.apply = function (compiler) {
//   compiler.plugin('done', () => {
//     console.log(this.options.msg)
//   })
// }
// 第2版
class No1WebpackPlugin {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		// console.log('compiler: ', compiler);
		// compiler.plugin('done', () => {
		// 	console.log(this.options.msg);
		// });
		compiler.hooks.done.tap('No1', () => {
			console.log(this.options.msg);
		});
	}
}

// 3. 将我们的自定义插件导出
module.exports = No1WebpackPlugin;
