/*
  __  __             _  __          _       
 |  \/  |           (_)/ _|        | |      
 | \  / | __ _ _ __  _| |_ ___  ___| |_ ___ 
 | |\/| |/ _` | '_ \| |  _/ _ \/ __| __/ __|
 | |  | | (_| | | | | | ||  __/\__ \ |_\__ \
 |_|  |_|\__,_|_| |_|_|_| \___||___/\__|___/
                                                    

 Compile all CoffeeScript in the ./src directory, bundle it and save a
 non-minified version for the local webserver to ./public/js.

 No sourcemaps here (yet).

*/

var gulp = require('gulp'),
    handleErrors = require('../util/handleErrors'),
    source = require('vinyl-source-stream');

gulp.task('manifests', function() {
  gulp.src([
    './frontend/javascripts/manifests/*'
    ])
    .pipe(gulp.dest('./app/assets/javascripts/'));

});