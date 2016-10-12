/**
 * Downloads and installs all typings
 */
module.exports = function() {
    var gulp = require('gulp');
    var gulpTypings = require('gulp-typings');

    return gulp.src("./typings.json")
            .pipe(gulpTypings());
}
