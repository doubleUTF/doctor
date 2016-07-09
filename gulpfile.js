var gulp=require('gulp');
var browserSync= require('browser-sync').create();

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
  './css/*.*']).on('change',browserSync.reload);
});
