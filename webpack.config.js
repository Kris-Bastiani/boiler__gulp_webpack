const webpack = require('webpack'),
	WebpackClearConsole = require('webpack-clear-console').WebpackClearConsole,
	path = require('path'),
	path_js = path.resolve(__dirname, 'src', 'assets', 'js');

const NODE_ENV = process.env.NODE_ENV || 'development';

const loaders = [
	{
		loader: 'babel-loader',
		options: {
			presets: ['env'],
			cacheDirectory: true
		}
	}
];

const config = {
	entry: {
		app: ['babel-polyfill', path.join(path_js, 'app.js')]
	},
	output: {
		filename: path.join('assets', 'js', '[name].js'),
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: loaders
			}
		]
	},
	plugins: []
};

if (NODE_ENV === 'production') {
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new WebpackClearConsole()
	];
} else {
	config.plugins = [];
}

module.exports = config;
