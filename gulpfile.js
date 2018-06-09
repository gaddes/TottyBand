const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','resources/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("resources/css"))
    .pipe(browserSync.stream());
});

// Move JS Files to resources/js (required by Bootstrap)
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("resources/js"))
    .pipe(browserSync.stream());
});

// Watch Sass & Server (reload browser when sass changes)
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'resources/scss/*.scss'], ['sass']);
  gulp.watch("resources/*.html").on('change', browserSync.reload);
});

// Default task. Note that because this is named 'default', it will run when we call 'gulp'.
gulp.task('default', ['js', 'serve']);
