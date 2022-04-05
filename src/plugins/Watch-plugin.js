function WatcherPlugin(options) {
	this.options = options || {};
}

WatcherPlugin.prototype.apply = function (compiler) {
	compiler.hooks.watchRun.tapAsync('WatcherPlugin', (compiler, cb) => {
		console.log('我可是时刻监听着的 🚀🚀🚀');
		// console.log(compiler);
		let mtimes = compiler.watchFileSystem.watcher.mtimes;
		let mtimesKeys = Object.keys(mtimes);
		if (mtimesKeys.length > 0) {
			console.log(`本次一共改动了${mtimesKeys.length}个文件,目录为:`);
			console.log(mtimesKeys);
			console.log('------------分割线-------------');
		}
		// console.log(compiler.watchFileSystem);
		cb();
	});
	compiler.hooks.watchClose.tap('WatcherPlugin', () => {
		console.log('本次监听停止了哟～👋👋👋');
	});
};
module.exports = WatcherPlugin;
