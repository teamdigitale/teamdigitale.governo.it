var gulp = require('gulp');
var	shell = require('gulp-shell');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var minifyHTML = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

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

gulp.task('optimize-css', function() {
   return gulp.src('_site/**/*.css')
	   // .pipe(autoprefixer())
	   // .pipe(uncss({
		 //   html: ['_site/**/*.html'],
		 //   ignore: []
	   // }))
	   .pipe(cleanCss({keepBreaks: false}))
	   .pipe(gulp.dest('_site/'));
});

gulp.task('optimize-js', function() {
    return gulp.src("js/*.js")
        .pipe(concat('scripts.js'))
        // .pipe(gulp.dest("_site/js"))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("_site/js"));
});
