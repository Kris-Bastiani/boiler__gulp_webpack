const connect = require('gulp-connect');
const gulp = require('gulp');
const pug = require('gulp-pug');
const pump = require('pump');

const pugLocals = {
	$meta: {
		title: 'Title',
		desc: 'Description'
	}
};

module.exports = (cb) => {
	pump([
		gulp.src('./src/**/[!_]*.pug'),
		pug({
			locals: pugLocals,
		}),
		gulp.dest('./dist'),
		connect.reload(),
	], cb);
};
