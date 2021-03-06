// Load plugins
var gulp = require('gulp'),
sass = require('gulp-sass');

// settings
var watch_folder = './framework/**/*';
var target_scss = './framework/standard.scss'; //path to the scss file or files you want to compile
var output_path = 'compiled/'; //path to the output folder

// Default task
gulp.task('default', ['watch', 'styles']);

// Watch and build task
gulp.task('watch', function() {
  gulp.watch(watch_folder, ['styles']);
});

// Styles
gulp.task('styles', function() {

  return gulp.src(target_scss)
  // this on function processes the file path to Unix style backslash in order for sourcemaps to work
  .on('data', function(file) {
    var path = require('path');
    if (process.platform == "win32") {
      file.path = path.relative(".", file.path);
      file.path = file.path.replace(/\\/g, "/");
    }
  }).pipe(sass({ //compiles sass with source map option on
    errLogToConsole: true,
    sourceComments: 'map',
    sourceMap: 'sass'
  }))
  .pipe(gulp.dest(output_path));
});

// Styles
gulp.task('styles_no_sourcemap', function() {

  return gulp.src(target_scss)
  // this on function processes the file path to Unix style backslash in order for sourcemaps to work
  .on('data', function(file) {
    var path = require('path');
    if (process.platform == "win32") {
      file.path = path.relative(".", file.path);
      file.path = file.path.replace(/\\/g, "/");
    }
  }).pipe(sass({ //compiles sass with source map option on
    errLogToConsole: true
  }))
  .pipe(gulp.dest(output_path));
});