/**
 * Downloads and installs all bower components
 */
module.exports = function() {
    var bower = require('gulp-bower');

    return bower({ cmd: 'update' });
}
