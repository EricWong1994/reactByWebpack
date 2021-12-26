module.exports = {
	plugins: [
		require('precss'),
		// require('autoprefixer')()
		require('autoprefixer')({
			overrideBrowserslist: [
				'defaults',
				'not ie <= 8',
				'last 2 versions',
				'> 1%',
				'iOS >= 7',
				'Android >= 4.0',
			],
		}),
	],
};

// module.exports = {
//     plugins: [
//         [
//         "postcss-preset-env",
//         {
//             // Options
//         },
//         ]
//     ]
// };