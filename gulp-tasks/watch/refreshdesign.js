module.exports = function(callback) {
    var runSequence = require('run-sequence');
    return runSequence(['clean:style', 'build:sass', 'build:directives', 'copy:sites', 'copy:index'], 'inject:all', callback);
}
