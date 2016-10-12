/**
 * Injects Bower components and copies html from source to destination
 */
module.exports = function(callback) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');
    var inject = require('gulp-inject');
    var bowerFiles = require('main-bower-files');

    var target = gulp.src(path.sourceViews + '/index.html');

    return gulp.src('./wwwroot/index.html')
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(gulp.dest('./wwwroot'));

    // return target.pipe(inject(
    //         gulp.src([
    //             path.destBower + path.allFiles + path.filterAll
    //         ], { read: false }), {
    //             relative: true,
    //             starttag: '<!-- inject:bower:{{ext}} -->',
    //             ignorePath: '../../wwwroot'
    //         }))
    //     .pipe(gulp.dest(path.destViews));
}