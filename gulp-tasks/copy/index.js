module.exports = function(cb) {
    var gulp = require('gulp');
    var runSequence = require('run-sequence');

    return gulp.src('./app/Views/index.html')
                .pipe(gulp.dest('./wwwroot/'));
}