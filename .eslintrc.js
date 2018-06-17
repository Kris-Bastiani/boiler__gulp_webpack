module.exports = {
	extends: 'airbnb-base',
	rules: {
		indent: [ 'error', 'tab' ],
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
