/**
 * copies languages
 */
module.exports = function(cb) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');

    return gulp.src(path.sourceLocalisation + path.allFiles + path.filterJson)
        .pipe(gulp.dest(path.destLocalisation));
};
