/**
 *  cleans wwwroot folder
 */
module.exports = function(callback) {
    var gulp = require('gulp');
    var del = require('del');
    var vinylPaths = require('vinyl-paths');
    var path = require('../../gulpfile.json');

    return gulp.src(path.build + path.allFiles)
        .pipe(vinylPaths(del));
};