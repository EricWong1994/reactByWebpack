module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	rules: {
		'block-no-empty': null,
		'comment-empty-line-before': [
			'always',
			{
				ignore: ['stylelint-commands', 'after-comment'],
			},
		],
		'max-empty-lines': 2,
		'unit-allowed-list': ['em', 'rem', '%', 's'],
	},
};
