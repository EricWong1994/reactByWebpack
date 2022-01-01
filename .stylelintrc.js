module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	rules: {
		indentation: [2],
		// 下面属性失效了, npm run style和写css也不能自动修复
		'color-hex-case': 'upper',
	},
};
