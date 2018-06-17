const connect = require('gulp-connect');
const gulp = require('gulp');

module.exports = () => {
	connect.server({
		livereload: true,
		port: 3000,
		root: 'dist'
	});
};
