var gulp=require('gulp');
var browserSync= require('browser-sync').create();
var imagemin=require('gulp-imagemin');

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

gulp.task('imgmin', function(){
  gulp.src('src/img/insurances/*')
  .pipe(imagemin())
  }))
  .pipe(gulp.dest('src/img/insurances/*'))
});
