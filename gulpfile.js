var gulp=require('gulp');
var browserSync= require('browser-sync').create();
var jshint= require('gulp-jshint');
var stylish= require('jshint-stylish');
var usemin= require('gulp-usemin');
var uglify= require('gulp-uglify');
var minifyHtml= require('gulp-minify-html');
var minifyCss= require('gulp-minify-css');
var imageMin= require('gulp-imagemin');
var rev= require('gulp-rev');
var del =require('del');
var cache= require('gulp-cache');
var notify = require('gulp-notify');


// jshint Lint task
gulp.task('jshint', function(){
  return gulp.src('js/custom.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Default task
gulp.task('default',['clean'], function(){
  gulp.start('usemin','imagemin','copyfonts','serve');
});

// Delete task- configured to delete dist folder
gulp.task('clean',function(){
  return del(['dist']);
});

// Usemin task to minify js,css,html and add revision to files
gulp.task('usemin',['clean','jshint'], function(){
  return gulp.src('./*html')
  .pipe(usemin({
    css: [minifyCss(),rev()],
    html: [minifyHtml({empty:true})],
    js: [uglify(),rev()]
  }))
  .pipe(gulp.dest('dist/'));
});

// Copy fonts
gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./fonts/**/*.{ttf,woff,eot,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

// Images
gulp.task('imagemin', function() {
     return del(['dist/img']), gulp.src('img/**')
    .pipe(cache(imageMin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Browsersync Watch html files
gulp.task('serve', function(){
  browserSync.init({
    server:{
      baseDir:"dist"
    }
  });
    gulp.watch(['dist/**']).on('change',browserSync.reload);
});
