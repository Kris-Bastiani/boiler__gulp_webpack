require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const jsPath = path.resolve(__dirname, 'src', 'assets', 'js');

const loaders = [
	{
		loader: 'babel-loader',
		options: {
			presets: ['env'],
			cacheDirectory: true,
		},
	},
];

const plugins = [
	new UglifyJsPlugin({
		uglifyOptions: {
			compress: {
				pure_funcs: ['console.log'],
			},
			mangle: false,
		},
	}),
];

const config = {
	entry: {
		app: ['babel-polyfill', path.join(jsPath, 'app.js')],
	},
	output: {
		filename: path.join('assets', 'js', '[name].js'),
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: loaders,
			},
		],
	},
	plugins: NODE_ENV === 'production' ? plugins : [],
};

module.exports = config;
