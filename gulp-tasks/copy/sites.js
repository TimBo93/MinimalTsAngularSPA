/**
 * copies languages
 */
module.exports = function(cb) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');

    return gulp.src(path.sourceSites + path.allFiles + path.filterHtml)
        .pipe(gulp.dest(path.destSites));
};
