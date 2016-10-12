module.exports = function(cb) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');

    return gulp.watch(path.sourceStyles + path.allFiles + path.filterScss, ['watch:refreshdesign']);
}
