/**
 *  Copies the not minified javascript files for debug reasons
 */
module.exports = function(cb) {
    var gulp = require('gulp');
    var mainBowerFiles = require('main-bower-files');
    var path = require('../../gulpfile.json');

    return gulp.src(mainBowerFiles(), {
        base: path.bowerBase
    }).pipe(gulp.dest(path.destBower));
};


// /**
//   * Pack the mainBowerFiles from ./Bower to ./wwwroot
//   */
// gulp.task("bower_mainfiles_release", function () {
// 	return gulp.src(mainBowerFiles({
// 		overrides: {
// 			'angular': {
// 				main: [
// 					'angular.min.js'
// 				]
// 			},
//             'angular-animate': {
//                 main: [
// 					'angular-animate.min.js'
// 				]
//             },
//             'angular-aria': {
//                 main: [
// 					'angular-aria.min.js'
// 				]
//             },
//             'angular-material': {
//                 main: [
// 					'angular-material.min.js',
// 					'angular-material.min.css'
// 				]
//             },
//             'angular-messages': {
//                 main: [
// 					'angular-messages.min.js',
// 				]
//             },
//             'angular-route': {
//                 main: [
// 					'angular-route.min.js',
// 				]
//             },
//             'angular-translate': {
//                 main: [
// 					'angular-translate.min.js',
// 				]
//             },
//             'angular-translate-loader-static-files': {
//                 main: [
//                     'angular-translate-loader-static-files.min.js'
//                 ]
//             },
//             'angular-local-storage': {
//                 main: [
//                     'dist/angular-local-storage.min.js'
//                 ]
//             },
//             'angular-sanitize': {
//                 main: [
//                     'angular-sanitize.min.js'
//                 ]
//             },
//             'angular-oauth2': {
//                 main: [
//                     'angular-oauth2.min.js'
//                 ]
//             },
//             'crypto-js': {
//                 main: [
//                     '**/*.js'
//                 ]
//             }
// 		}
// 	}), { base: settings.bowerBase }).pipe(gulp.dest(settings.bowerOut));
// });