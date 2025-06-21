const imagemin = require('gulp-imagemin');
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Caminhos dos arquivos
const paths = {
  scss: {
    src: 'source/**/*.scss',
    dest: 'build/'
  }
};

// Tarefa para compilar SASS
function compileSass() {
  return src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scss.dest));
}

function compressImages() {
  return src('images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin())
    .pipe(dest('build/images'));
}

// Tarefa para assistir mudanças em arquivos SCSS
function watchFiles() {
  watch(paths.scss.src, compileSass);
}

// Exportar tarefas
exports.default = series(compileSass, compressImages, watchFiles);
exports.build = compileSass;
