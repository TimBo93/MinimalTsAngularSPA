module.exports = function(cb) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');

    return gulp.watch(path.sourceRoot + path.allFiles + path.filterHtml, ['watch:refreshdesign']);
}
