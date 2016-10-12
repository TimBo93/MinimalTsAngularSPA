/**
 * copies assets
 */
module.exports = function(cb) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');

    return gulp.src(path.sourceAssets + path.allFiles + path.filterAll)
        .pipe(gulp.dest(path.destAssets));
};
