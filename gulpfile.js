var gulp = require('gulp');
var	shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var minifyHTML = require('gulp-minify-html');

gulp.task('jekyll', function() {
  return gulp.src('index.html', {
      read: false
    })
    .pipe(shell([
      'jekyll build'
    ]));
});

gulp.task('optimize-images', function () {
	return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif', '_site/**/*.png'])
		.pipe(imagemin({
			progressive: false,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant(), jpegtran(), gifsicle()]
		}))
		.pipe(gulp.dest('_site/'));
});

gulp.task('optimize-html', function() {
	return gulp.src('_site/**/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(gulp.dest('_site/'));
});
