/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require('gulp');
gulp.task('default', function () {
    // place code for your default task here
});
var paths = {};
paths.webroot = "./../Org.App.Web/wwwroot/";
paths.npmSrc = "./node_modules/";
paths.npmLibs = paths.webroot + "lib/npmlibs/";

gulp.task("copy-deps:systemjs", function () {
    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
});

gulp.task("copy-deps:angular2", function () {
    return gulp.src([
                paths.npmSrc + '/@angular/common/bundles/*.js',
                paths.npmSrc + '/@angular/compiler/bundles/*.js',
                paths.npmSrc + '/@angular/core/bundles/*.js',
                paths.npmSrc + '/@angular/forms/bundles/*.js',
                paths.npmSrc + '/@angular/http/bundles/*.js',
                paths.npmSrc + '/@angular/platform-browser/bundles/*.js',
                paths.npmSrc + '/@angular/platform-browser-dynamic/bundles/*.js',
                paths.npmSrc + '/@angular/router/bundles/*.js',
                paths.npmSrc + '/@angular/upgrade/bundles/*.js'
            ], { base: paths.npmSrc + '/@angular/' })
         .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
});

gulp.task("copy-deps:es6-shim", function () {
    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));
});
gulp.task("copy-deps:es6-promise", function () {
    return gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
});
gulp.task("copy-deps:rxjs", function () {
    return gulp.src([
        paths.npmSrc + '/rxjs/*.js',
        paths.npmSrc + '/rxjs/**/*.js',
    ], { base: paths.npmSrc + '/rxjs/' })
         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
});

gulp.task("copy-deps:zone", function () {
    return gulp.src(paths.npmSrc + '/zone.js/dist/*.*', { base: paths.npmSrc + '/zone.js/dist/' })
         .pipe(gulp.dest(paths.npmLibs + '/zonejs/'));
});

gulp.task("copy-deps:reflect", function () {
    return gulp.src(paths.npmSrc + '/reflect-metadata/*.js', { base: paths.npmSrc + '/reflect-metadata/' })
         .pipe(gulp.dest(paths.npmLibs + '/reflect-metadata/'));
});

gulp.task("copy-deps", ["copy-deps:reflect","copy-deps:zone","copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:es6-promise']);