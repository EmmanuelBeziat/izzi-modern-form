/**
 * Gulp dependancies
 */
var gulp = require('gulp'),
	plugins = {
		stylus: require('gulp-stylus'),
		uglify: require('gulp-uglify'),
		concat: require('gulp-concat'),
		rename: require('gulp-rename'),
		plumber: require('gulp-plumber'),
		livereload: require('gulp-livereload'),
		sourcemaps: require('gulp-sourcemaps')
	}

/**
 * Project & pathes
 */
var project = 'modern-form',
	path = {
		demo: './demo',
		css: './demo/css',
		src: './src',
		dist: './dist',
		stylus: './src/stylus',
		js: './src/js'
	};

/**
 * livereload
 */
gulp.task('reload', function() {
	plugins.livereload();
});

/**
 * Save and minify stylus files in one css file
 * Create sourcemap file
 **/
gulp.task('styles', function() {
	return gulp.src(path.stylus + '/main.styl')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.stylus({
				compress: true
			}))
		.pipe(plugins.sourcemaps.write('../css'))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.css))
		.pipe(plugins.livereload());
});

/**
 * Save and minify js files in one js file
 * Create sourcemap file
 **/
gulp.task('scripts', function() {
	return gulp.src(path.js + '/*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.sourcemaps.init())
			.pipe(plugins.uglify({
				preserveComments: 'some'
			}))
			.pipe(plugins.rename(project + '.min.js'))
		.pipe(plugins.sourcemaps.write('../dist'))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest(path.dist))
		.pipe(plugins.livereload());
});

gulp.task('build', ['styles', 'scripts'], function() {
});

gulp.task('watch', function() {
	plugins.livereload.listen();
	gulp.watch(path.stylus + '/*.styl', ['styles']);
	gulp.watch(path.js + '/*.js', ['scripts']);
	gulp.watch('**/*.html', ['reload']);
});