/**
 * download of all dependencies
 */
module.exports = function(callback) {
     var runSequence = require('run-sequence');

    return runSequence('install:bower', 'install:typings', callback);
};

