// class HelloWorldPlugin {
//     apply(compiler) {
//       compiler.hooks.done.tap('Hello World Plugin', (
//         stats /* 在 hook 被触及时，会将 stats 作为参数传入。 */
//       ) => {
//         console.log('Hello World!');
//       });
//     }
//   }
// module.exports = HelloWorldPlugin;

// A JavaScript class.
class MyExampleWebpackPlugin {
	// Define `apply` as its prototype method which is supplied with compiler as its argument
	apply(compiler) {
		console.log('compiler: ', compiler);
		// Specify the event hook to attach to
		compiler.hooks.emit.tapAsync(
			'MyExampleWebpackPlugin',
			(compilation, callback) => {
				console.log('This is an example plugin!');
				// console.info(compilation);
				// console.log(
				// 	'Here’s the `compilation` object which represents a single build of assets:',
				// 	compilation
				// );

				// Manipulate the build using the plugin API provided by webpack
				// compilation.addModule(/* ... */);

				callback();
			}
		);
	}
}
module.exports = MyExampleWebpackPlugin;
