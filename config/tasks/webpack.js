'use strict'

const gulp    = require('gulp');
const webpack = require('webpack-stream');
const config  = require('../config');
const plumber = require('gulp-plumber');

gulp.task('webpack', ()=>{
  const webpackconfig = '../../webpack.production.config.js';
  const outputPath = config.buildPath;
  gulp.src('')
    .pipe(webpack(require(webpackconfig)))
    .pipe(gulp.dest(outputPath+'javascripts/'));
});

