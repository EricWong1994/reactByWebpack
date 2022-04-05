/*
function FileListPlugin(options) {
	this.options = options || {};
	this.filename = this.options.filename || 'fileList.md';
}

FileListPlugin.prototype.apply = function (compiler) {
	// 1.
	compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
		// 2.
		const fileListName = this.filename;
		// console.log('this: ', this); // FileListPlugin { options: {}, filename: 'fileList.md' }
		// 3.
		let len = Object.keys(compilation.assets).length;
		// 4.
		let content = `# 一共有${len}个文件\n\n`;
		// 5.
		for (let filename in compilation.assets) {
			content += `- ${filename}\n`;
		}
		// 6.
		compilation.assets[fileListName] = {
			// 7.
			source: function () {
				return content;
			},
			// 8.
			size: function () {
				return content.length;
			},
		};
		// 9.
		cb();
	});
};
*/

// 第二种 Promise
function FileListPlugin(options) {
	this.options = options || {};
	this.filename = this.options.filename || 'fileList.md';
}

FileListPlugin.prototype.apply = function (compiler) {
	// 第二种 Promise
	compiler.hooks.emit.tapPromise('FileListPlugin', compilation => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve();
			}, 1000);
		}).then(() => {
			const fileListName = this.filename;
			// 一个对象包含 index.html 和 bundle.js
			// console.log('compilation.assets: ', compilation.assets);
			let len = Object.keys(compilation.assets).length;
			let content = `### 一共有${len}个文件\n\n`;
			for (let filename in compilation.assets) {
				content += `- ${filename}\n`;
			}
			compilation.assets[fileListName] = {
				source: function () {
					return content;
				},
				size: function () {
					return content.length;
				},
			};
		});
	});
};

module.exports = FileListPlugin;
