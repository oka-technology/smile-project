const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/pug/*.pug')
    .pipe(pug({
      // Your options in here.
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', (done) => {
  gulp.watch('./src/sass/*.scss', gulp.task('sass'));
  gulp.watch(['./src/pug/*.pug', '!' + './src/pug/_*.pug'], gulp.task('pug'));
  done();
});

gulp.task('default', gulp.parallel('sass', 'pug', 'watch'));
