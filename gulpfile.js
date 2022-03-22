const { src, dest, watch } = require('gulp');
const compileHandlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const data = require('./src/data.json');

const paths = {
  dist: './dist',
  handlebars: 'src/**/*.handlebars',
};

function handlebars() {
  const options = {
    batch: ['./src/partials'],
  };

  return src('src/pages/*.handlebars')
    .pipe(compileHandlebars(data, options))
    .pipe(rename('index.html'))
    .pipe(dest(paths.dist))
    .pipe(browserSync.stream());
}

exports.handlebars = handlebars;

exports.default = function () {
  browserSync.init({ server: paths.dist });

  const watcher = watch(paths.handlebars, handlebars);
  watcher.on('change', () => browserSync.reload());
};
