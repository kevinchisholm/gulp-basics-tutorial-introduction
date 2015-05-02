var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp
    .src(['src/js/file-1.js','src/js/file-2.js','src/js/file-3.js'])
    .pipe(gulp.dest('build/js')); 
});
