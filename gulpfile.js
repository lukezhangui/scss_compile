// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass');

// Styles
gulp.task('styles', function() {
  return gulp.src('./framework/standard.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('compiled/'));
});

// Default task
gulp.task('default', ['watch', 'styles']);

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('./framework/standard.scss', ['styles']);
});