/**
 *  cleans all compiled files
 */
module.exports = function(callback) {
    var gulp = require('gulp');
    var del = require('del');
    var vinylPaths = require('vinyl-paths');
    var path = require('../../gulpfile.json');

    return gulp.src(path.destBuild + path.allFiles)
        .pipe(vinylPaths(del));
};