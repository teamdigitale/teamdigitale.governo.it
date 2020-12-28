var gulp = require('gulp'),
  del = require('del'),
  log = require('fancy-log'),
  colors = require('ansi-colors'),
  fs = require('fs'),
  os = require('os'),
  path = require('path'),
  shell = require('gulp-shell'),
  imagemin = require('gulp-imagemin'),
  htmlmin = require('gulp-htmlmin'),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  rsync = require('gulp-rsync'),
  exec = require('gulp-exec'),
  htmlproof_sitefolder = '_site/',
  htmlproof_params = '--check-html --allow-hash-href --only-4xx --external_only --internal-domains teamdigitale.governo.it --url-ignore "/twitter.com/"',
  configFile = path.join(os.homedir(), '.teamdigitale_site.json')

var config = {}
if (fs.existsSync(configFile)) {
  log('Reading local config from [' + configFile + ']')
  config = require(configFile)
} else {
  log('No local config found at [' + configFile + ']')
}

gulp.task('jekyll', function() {
  return gulp.src('index.html', {
    read: false
  }).pipe(shell([
    'bundle exec jekyll build'
  ]))
})

// Validates html and links
gulp.task('html-proofer', function(done) {
  var cmd = 'bundle exec htmlproofer ' + htmlproof_sitefolder + ' ' + htmlproof_params
  return gulp.src(htmlproof_sitefolder)
    .pipe(exec(cmd, function(error, stdout, stderr) {
      log(colors.yellow(cmd))
      log(colors.cyan(stdout))
      log(colors.red(stderr))
      done(error)
    }))
})


gulp.task('optimize-images', function() {
  return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif',
    '_site/**/*.png'
  ])
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.gifsicle({interlaced: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false}
        ]
      })
    ]))
    .pipe(gulp.dest('_site/'))
})

gulp.task('optimize-html', function() {
  return gulp.src('_site/**/*.{htm,html}')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('_site/'))
})

gulp.task('optimize-css', function() {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({
      keepBreaks: false
    }))
    .pipe(gulp.dest('_site/styles'))
})

gulp.task('optimize-js', function() {
  return gulp.src('js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'))
})

gulp.task('clean', function() {
  return del(['_site/**/*'])
})

gulp.task('optimize', gulp.parallel(
  'optimize-js',
  'optimize-css',
  'optimize-html',
  'optimize-images',
  'html-proofer',
  function(done) {
    done()
  }))

gulp.task('build', gulp.series(
  'clean',
  'jekyll',
  'optimize',
  function(done) {
    done()
  }))

if (config.staging || process.env.TEAMDIGITALE_SITE_STAGING_SERVER) {
  gulp.task('publish-staging', function() {
    var publish_server = process.env.TEAMDIGITALE_SITE_STAGING_SERVER || config.staging.server
    var publish_destination = process.env.TEAMDIGITALE_SITE_STAGING_PATH || config.staging.path
    var publish_port = process.env.TEAMDIGITALE_SITE_STAGING_PORT || config.staging.port

    return gulp.src('_site/**')
      .pipe(rsync({
        root: '_site',
        hostname: publish_server,
        destination: publish_destination,
        port: publish_port,
        delete: true,
        recursive: true,
        compress: true,
        chmod: 'g+rwx',
        chown: 'www-data:www-data',
        perms: true,
        owner: true,
        group: true
      }))
  })
} else {
  gutil.log('No config for staging publish, task will be disabled')
}

if (config.production || process.env.TEAMDIGITALE_SITE_PRODUCTION_SERVER) {
  gulp.task('publish-production', function() {
    var publish_server = process.env.TEAMDIGITALE_SITE_PRODUCTION_SERVER || config.production.server
    var publish_destination = process.env.TEAMDIGITALE_SITE_PRODUCTION_PATH || config.production.path
    var publish_port = process.env.TEAMDIGITALE_SITE_PRODUCTION_PORT || config.production.port

    return gulp.src('_site/**')
      .pipe(rsync({
        root: '_site',
        hostname: publish_server,
        destination: publish_destination,
        port: publish_port,
        recursive: true,
        compress: true
      }))
  })
} else {
  gutil.log('No config for production publish, task will be disabled')
}
