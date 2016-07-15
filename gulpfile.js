var gulp=require('gulp');
var browserSync= require('browser-sync').create();
var jshint= require('gulp-jshint');
var stylish= require('jshint-stylish');


// jshint Lint task
gulp.task('jshint', function(){
  return gulp.src('js/custom.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Default task
gulp.task('default',['serve']);

// Browsersync Watch html files
gulp.task('serve', function(){
  browserSync.init({
    server:{
      baseDir:'./'
    }
  });
    gulp.watch(['./*.html','./img/*.*',
  './css/*.css','./js/*.js']).on('change',browserSync.reload);
});
