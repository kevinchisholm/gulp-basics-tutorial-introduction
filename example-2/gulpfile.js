//get references to the two modules that we need
var gulp = require('gulp'),
    concat = require('gulp-concat');

//create a default gulp task
gulp.task('default', function() {
  
  //return the file stream
  return gulp

    //read the files into memory
    .src(['src/js/file-1.js','src/js/file-2.js','src/js/file-3.js'])

    //pipe the file to the contact module,
    //which creates one concatenated file
    .pipe(concat('scripts-all.js'))

    //write the files from memory to disk
    .pipe(gulp.dest('build/js')); 
});
