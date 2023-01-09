var gulp    = require('gulp'),
    sass    = require('gulp-sass')(require('sass')),
    postcss = require('gulp-postcss'),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    uglify  = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    autoprefixer = require('autoprefixer'),
    babelify = require('babelify'),
    browserify = require('browserify');


function reload(done) {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080
  });
  done();
}

function styles() {
  return (
    gulp.src('src/sass/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('dist/css'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
  );
  
}

function scripts() {
  return browserify('src/js/scripts.js')
    .on('error', function (err) {
      console.log(err)
      this.emit('end')
    })
    .transform(babelify.configure({
      presets : ["@babel/preset-env"]
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(rename('scripts.min.js'))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  return (
    gulp.src('src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
  )
}

function watchTask(done) {
  gulp.watch('*.html', html);
  gulp.watch('src/sass/**/*.sass', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  done();
}

const watch = gulp.parallel(watchTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts, html, views));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.watch = watch;
exports.build = build;
exports.default = watch;