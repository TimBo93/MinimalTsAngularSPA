/**
 * Injects directives
 */
module.exports = function(callback) {
    var gulp = require('gulp');
    var path = require('../../gulpfile.json');
    var inject = require('gulp-inject');

    return gulp.src(path.build + '/index.html')
            .pipe(
                inject(gulp.src(path.destDirectives + path.allFiles + path.filterJs, {read: false}), {
                relative: true,
                starttag: '<!-- inject:directives -->',
                ignorePath: '../../wwwroot'
            }))
            .pipe(gulp.dest(path.build));
}