/**
 * Created by daviD on 05/05/2017.
 */
/*
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
   return tsProject.src().
   pipe(tsProject()).
   js.pipe(gulp.de st("dist"));
});
*/

var gulp = require("gulp");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

var browserify = require("browserify");
var watchify = require('watchify');
var gutil = require('gulp-util');

var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
    pages: ['index.html']
};

/*
    ==================
    Browserify Config
    ==================
 */
function getBrowserify(){
    return browserify( {
        basedir: '.',
        debug: true,
        entries: ['src/hello.ts'],
        cache: {},
        packageCache: {}
    });
};

function bundleBrowserify(){
    return getBrowserify()
        .plugin(tsify)
        .bundle()
        .pipe(source('main.js'))

        // uglify steps ..
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest("dist"))
}

/*
    ===========================
    Watched Browserify Config
    ===========================
 */

var watchedBrowserify = watchify(getBrowserify());

function bundleWatchedBrowserify(){
    return watchedBrowserify
        .plugin(tsify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest("dist"));
}

watchedBrowserify.on('update', bundleWatchedBrowserify);
watchedBrowserify.on("log", gutil.log);


/*
    ===========
    Gulp Tasks
    ===========
 */
gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], bundleBrowserify );

gulp.task("build-watch", ["copy-html"], bundleWatchedBrowserify);
