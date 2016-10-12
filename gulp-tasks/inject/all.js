module.exports = function(callback) {
    var runSequence = require('run-sequence');

    return runSequence('inject:bower', 'inject:sass', 'inject:directives', callback);
};