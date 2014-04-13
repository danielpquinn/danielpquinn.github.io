var gulp = require('gulp'),
  concat = require('gulp-concat');


gulp.task('styles', function () {
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ]).pipe(concat('styles.css'))
  .pipe(gulp.dest('css'));
});

gulp.task('scripts', function () {
  gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
  ]).pipe(concat('scripts.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('default', ['styles', 'scripts']);