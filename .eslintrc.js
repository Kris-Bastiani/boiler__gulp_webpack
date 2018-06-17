module.exports = {
	extends: 'airbnb-base',
	rules: {
		indent: [ 'error', 'tab' ],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'no-mixed-operators': [
			'error',
			{
				'groups': [
					['+', '-', '*', '/', '%', '**'],
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof'],
				],
			},
		],
		'no-tabs': 0,
	},
	env: {
		browser: true,
	},
};
