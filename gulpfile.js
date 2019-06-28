const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('sass', () => (
  gulp.src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('dist/css'))
));

gulp.task('pug', () => (
  gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'))
));

gulp.task('static', () => (
  gulp.src(['src/js/**/*', 'src/img/**/*'], {base: 'src'})
    .pipe(gulp.dest('dist')),
  gulp.src(['src/html/**/*'])
    .pipe(gulp.dest('dist'))
));

gulp.task('watch', async () => {
  gulp.watch('src/sass/**/*.scss', gulp.task('sass'));
  gulp.watch('src/pug/**/*.pug', gulp.task('pug'));
  gulp.watch(['src/js/**/*', 'src/img/**/*', 'src/html/**/*'
  ], gulp.task('static'));
});

gulp.task('default', gulp.series(gulp.parallel('sass', 'pug', 'static'), 'watch'));
