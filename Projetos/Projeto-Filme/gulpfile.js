const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./css' ));
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/scss/*.scss', gulp.parallel(styles))
}