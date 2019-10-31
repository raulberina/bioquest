'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
var uglifycss = require('gulp-uglifycss');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    	.pipe(sass.sync().on('error', sass.logError))
    	.pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
  return gulp.src('./css/*.css')
    	.pipe(uglifycss({"uglyComments": true}))    
    	.pipe(gulp.dest('./dist/'));
});

gulp.task('images', function() {
    return gulp.src('./images_original/*')
       	 .pipe(imagemin())
       	 .pipe(gulp.dest('./images'));
});


gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', gulp.series('sass'));
  gulp.watch('./css/*.css', gulp.series('css'));
  gulp.watch('./images_original/*', gulp.series('images'));
});
