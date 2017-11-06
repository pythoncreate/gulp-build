'use strict';

const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  sass = require('gulp-sass'),
	  rename = require('gulp-rename'),
	  minCss = require('gulp-clean-css'),
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

gulp.task("compileSass", function() {
  return gulp.src('app/sass/global.scss')
      .pipe(maps.init())
      .pipe(sass())
      .pipe(minCss())
      .pipe(rename('all.min.css'))
      .pipe(maps.write('./'))
      .pipe(gulp.dest('dist/styles'));
});