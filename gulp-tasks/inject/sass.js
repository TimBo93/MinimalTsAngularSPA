/**
 * Injects styles
 */
module.exports = function(callback) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');
    var inject = require('gulp-inject');

    return gulp.src(path.build + '/index.html')
            .pipe(inject(gulp.src(path.destStyles + path.allFiles + path.filterCss, {read: false}), {relative: true}))
            .pipe(gulp.dest(path.build));
}