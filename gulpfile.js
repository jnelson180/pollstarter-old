// gulpfile provided from https://github.com/StephenGrider/ReactCasts/blob/master/todos/gulpfile.js

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var livereload = require('gulp-livereload');
var babelify = require('babelify');
var sass = require('gulp-sass');

var notify = function (error) {
    // var message = 'In: ';
    // var title = 'Error: ';

    // if (error.description) {
    //     title += error.description;
    // } else if (error.message) {
    //     title += error.message;
    // }

    // if (error.filename) {
    //     var file = error.filename.split('/');
    //     message += file[file.length - 1];
    //     console.log(message);
    // }

    // if (error.lineNumber) {
    //     console.log('error On Line: ' + error.lineNumber + ':', error);
    // }
    // console.log(error.description + ":\n" + error.message ? error.message : "");
    // notifier.notify({ title: title, message: message });
    console.log(JSON.stringify(error).toString().slice(0, 500));
};

var bundler = watchify(browserify({
    entries: ['./app/src/App.jsx'],
    transform: [babelify],
    extensions: ['.jsx', '.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
}));

function bundle() {
    return bundler
        .bundle()
        .on('error', notify)
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/'))
        .pipe(livereload());
}
bundler.on('update', bundle)

gulp.task('build', function () {
    bundle()
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./app/src/**', ['build']);
    gulp.watch('./sass/**', ['sass'])
});

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('default', ['build', 'sass', 'watch']);
