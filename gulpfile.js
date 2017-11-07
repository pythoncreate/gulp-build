'use strict';

const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename'),
	  minCss = require('gulp-clean-css'),
	  changed = require('gulp-changed'),
	  imagemin = require('gulp-imagemin'),
	  del = require('del'),
	  runSequence = require('run-sequence'),
	  connect = require('gulp-connect'),
	  maps = require('gulp-sourcemaps');


gulp.task("scripts", function(){
	return gulp.src([
			  'app/js/*.js'
			  ])
	.pipe(maps.init())
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function() {
   var imgSrc = 'app/images/*.+(png|jpg)',
   imgDst = 'dist/content';
   
   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});


gulp.task("styles", function() {
  return gulp.src('app/sass/global.scss')
      .pipe(maps.init())
      .pipe(sass())
      .pipe(minCss())
      .pipe(rename('all.min.css'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('dist/styles'));
});

gulp.task('watchFiles', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
})

gulp.task('clean', function(){
	del('dist');

})

gulp.task('connect', function() {
	connect.server();
});

gulp.task("build", ['clean'], function(callback) {
	runSequence(['scripts', 'styles', 'images'], 
	callback
	)
});

gulp.task('serve', ['watchFiles']);

gulp.task("default", ["connect"], function() {
	gulp.start('build');
});