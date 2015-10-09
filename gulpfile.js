var gulp   		= require('gulp'),
	jshint 		= require('gulp-jshint'),
	lab 		= require('gulp-lab'),
	nodemon 	= require('gulp-nodemon');
 
gulp.task('lib-lint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test-lint', function() {
  return gulp.src('./test/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lab', function() {
  return gulp.src('./test')
    .pipe(lab('-v -l -C'));
});

gulp.task('start', function () {
  nodemon({
  	script : './app.js',
  	ext : 'js'
  });
});

gulp.task('lint', ['lib-lint', 'test-lint']);
gulp.task('test', ['lint', 'lab']);
gulp.task('default', ['test', 'start']);