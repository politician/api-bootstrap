var gulp = require('gulp')
var lab = require('gulp-lab')
var nodemon = require('gulp-nodemon')
var standard = require('gulp-standard')

gulp.task('lint', function () {
  return gulp.src(['./test/*.js', './api/*.js', './*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('lab', function () {
  return gulp.src('./test')
    .pipe(lab('-v -l -C -t 50'))
})

gulp.task('start', function () {
  nodemon({
    script: './api.js',
    ext: 'js',
    env: { 'NODE_ENV': 'dev' },
    tasks: ['lint']
  })
})

gulp.task('test', gulp.series('lint', 'lab'))
gulp.task('default', gulp.series('test', 'start'))
