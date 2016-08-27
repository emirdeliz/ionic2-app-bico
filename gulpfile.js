var gulp = require('gulp');
var gulpWatch = require('gulp-watch');
var del = require('del');
var runSequence = require('run-sequence');
var argv = process.argv;

/**
* Ionic hooks
* Add ':before' or ':after' to any Ionic project command name to run the specified
* tasks before or after the command.
*/
gulp.task('serve:after', ['watch']);
gulp.task('emulate:after', ['build']);
gulp.task('deploy:after', ['build']);
gulp.task('build:after', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('--l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:after', [shouldWatch ? 'watch' : 'build']);

/**
* Ionic Gulp tasks, for more information on each see
* https://github.com/driftyco/ionic-gulp-tasks
*
* Using these will allow you to stay up to date if the default Ionic 2 build
* changes, but you are of course welcome (and encouraged) to customize your
* build however you see fit.
*/
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');
var webkitAssign = require('webkit-assign');
var fs = require('fs');

var isRelease = argv.indexOf('--release') > -1;

gulp.task('watch', ['clean'], (done) => {
    gulp.start('build');

    gulpWatch('app/**/*.scss', () => { gulp.start('sass'); });
    gulpWatch('app/**/*.html', () => { gulp.start('html'); });
    gulpWatch('app/**/*.ts', ['scripts'], () => {
        buildBrowserify({watch: true}).on('end', () => {
            gulp.start('work-around-bug-ios');
        });
    });
});

gulp.task('build', ['clean'], (done) => {
    runSequence(['sass', 'html', 'fonts', 'assets', 'scripts'], () => {
        buildBrowserify({
            minify: isRelease,
            browserifyOptions: {
                debug: !isRelease
            },
            uglifyOptions: {
                mangle: false
            }
        }).on('end', () => {
            gulp.start('work-around-bug-ios');
        });
    });
});

/*
    TypeError: Attempted to assign to readonly property
    https://github.com/angular/angular.js/issues/9128
*/

gulp.task('work-around-bug-ios', () => {
    return fs.createReadStream('www/build/js/app.bundle.js')
        .pipe(webkitAssign())
        .pipe(fs.createWriteStream('www/build/js/app.bundle.fix.js'));
});

gulp.task('sass', () => {
    return buildSass({
        dest: 'www/build/css',
        sassOptions: {
            includePaths: [
                'node_modules/ionic-angular',
                'node_modules/ionicons/dist/scss',
                'node_modules/font-awesome/scss'
            ]
        }
    });
});

gulp.task('images', () => {
    gulp.src('app/assets/images/**/*')
    .pipe(gulp.dest('www/build/images'));
});

gulp.task('assets', ['images']);

gulp.task('html', copyHTML);

gulp.task('fonts', () => {
    return copyFonts({
        dest: 'www/build/fonts',
        src: [
            'node_modules/ionic-angular/fonts/**/*.+(ttf|woff|woff2)',
            'node_modules/ionicons/dist/fonts/**/*.+(ttf|woff|woff2)',
            'node_modules/font-awesome/fonts/**/*.+(eot|ttf|woff|woff2|svg)',
            'app/assets/fonts/**/*.+(eot|ttf|woff|woff2|svg)'
        ]
    });
});

gulp.task('scripts', copyScripts);
gulp.task('clean', () => {
    return del('www/build');
});
