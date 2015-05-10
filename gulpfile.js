var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	sourcemaps = require('sourcemaps'),
	rename = require('rename'),
	concat = require('concat'),
	uglify = require('uglify'),
	jshint = require('jshint'),
	stylus = require('stylus');

/**
 * Sauvegarde et compresse les fichiers stylus dans un unique fichier style.css
 * Garde le comportement @require de stylus
 * Crée un fichier sourcemap dans /maps/
 **/
gulp.task('stylus', function() {
	return gulp.src('src/stylus/main.styl')
		.pipe(sourcemaps.init())
			.pipe(stylus({
				compress: true
			}))
		.pipe(sourcemaps.write('demo/css'))
		.pipe(gulp.dest('demo/css/main.min.css'));
});

/**
 * Sauvegarde et compresse les fichiers JS dans un fichier minifié
 * Crée un fichier sourcemap dans /maps/
 **/
gulp.task('javascript', function() {
	return gulp.src('src/js/*.js')
		.pipe(sourcemaps.init())
			.pipe(uglify())
		.pipe(sourcemaps.write('dist'))
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['stylus', 'javascript'], function() {
});

gulp.task('watch', function() {
	gulp.watch('src/stylus/*.styl', ['stylus']);
	gulp.watch('src/js/*.js', ['javascript']);
});