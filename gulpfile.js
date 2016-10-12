// /// <binding Clean='_clean' />
// /*
// This file in the main entry point for defining Gulp tasks and using Gulp plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
// */


/**
 * Für mehr Hilfe, gebe "gulp ?" ein.
 */

// // imports
var gulp = require('gulp');
require('gulp-task-loader')();
// var runSequence = require('run-sequence');
// var mainBowerFiles = require('main-bower-files');
// var rollup = require('gulp-rollup');
// var webpack = require('gulp-webpack');
// var watch = require('gulp-watch');
// var minify = require('gulp-minify');
// var filter = require('gulp-filter');
// var filter = require('gulp-filter');
// var plumber = require('gulp-plumber');
// var plugins = require('gulp-load-plugins')({
// 	scope: ['dependencies', 'devDependencies'] // which keys in the config to look within
// });
// // var print = require('gulp-print'); nur für debug-zwecke

// var taskListing = require('gulp-task-listing');
// var settings = require('./gulp/settings.json');



var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");

gulp.task('qual', function(cb) {
    var gulp = require("gulp");
    var webpackConfig = require('./webpack.config.js');
	var myConfig = Object.create(webpackConfig);

    var compiler = webpack(
        myConfig,
        function(err, stats) {
            if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
        }
    );

    // new WebpackDevServer(compiler, {
    //     myConfig
    // }).listen(8080, "localhost", function(err) {
    //     if(err) throw new gutil.PluginError("webpack-dev-server", err);
    //     // Server listening
    //     gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    //     // keep the server alive or continue?
    //     // callback();
    // });
});


// /**
//  * Copy all files from src/lang to build/lang
//  */
// gulp.task('copy_languages', function(cb){
// 	gulp.src(settings.langSource)
// 	  .pipe(gulp.dest(settings.langOut));
//     cb();
// });


// /**
//  * Copy all files from src/app/Assets to build/assets
//  */
// gulp.task('copy_assets', function(cb){
// 	gulp.src(settings.assetsSource)
//        .pipe(gulp.dest(settings.assetsOut));
//     cb();
// });


// /**
//  * packe alle gebauten js Dateien in eine Datei
//  */
// gulp.task('webpack_build_js', function() {
//   return gulp.src('./build/tscompiler/js/Applications/App.js')
//     .pipe(webpack({
//         output: {
//             filename: 'all.js'
//         }
//     }))
//     .pipe(gulp.dest(settings.concatJs));
// });

//  /**
//   * minifiziert die js Dateien
//   */
// gulp.task('minify_release', function() {
//   return gulp.src('./build/concatenated/**/*.js')
//     .pipe(minify({
//         ext:{
//             min:'.min.js'
//         },
//     }))
//     .pipe(filter(['**/*min.js']))
//     .pipe(gulp.dest(settings.buildJs))
// });
// gulp.task('minify_debug', function() {
//   return gulp.src('./build/concatenated/**/*.js')
//     .pipe(gulp.dest(settings.buildJs))
// });


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

// /**
//  * Collection of all injections
//  */
// gulp.task('inject_all', function () {
// 	runSequence('inject_bower', 'inject_compiled_js');
// });

// /**
//  * Inject bower components
// */
// gulp.task('inject_bower', function () {
// 	return gulp.src('./app/views/**/*.html')
// 	  .pipe(inject(
//           gulp.src([
//                 settings.bowerOut+'/**',
//                 '!'+settings.bowerOut+'/crypto-js/**/!(crypto-js.js)'
//             ], { read: false }), {
//               relative: true,
//               starttag: '<!-- inject:bower:{{ext}} -->',
//               ignorePath: '../../wwwroot'
//             }))
// 	  .pipe(gulp.dest(settings.build));
// });

// /**
//  * Include generated JavaScript files into html views
// */
// gulp.task('inject_compiled_js', function(){
// 	return gulp.src(settings.allViewsOut)
// 	  .pipe(inject(gulp.src(settings.allScriptOut, {read: false}), {relative: true}))
// 	  .pipe(gulp.dest(settings.build));
// });

// gulp.task('_init_debug', function() {
// 	runSequence(['_clean', 'clean_bower'], ['bower_download', 'typings_download'], 'bower_mainfiles_debug', 'printFinish');
// });
// gulp.task('_init_release', function() {
// 	runSequence('cleanfull', ['bower_download', 'typings_download'], 'bower_mainfiles_release', 'printFinish');
// });

// gulp.task('default', function () {
// 	runSequence('clean_build', 'code_debug');
// });

// gulp.task('code_debug', ['copy_languages', 'copy_assets', 'ts_lint'], function () {
// 	runSequence('_buildTypeScript', 'webpack_build_js', 'minify_debug', 'inject_all');
// });
// gulp.task('code_release', ['copy_languages', 'copy_assets'], function () {
// 	runSequence('_buildTypeScript', 'webpack_build_js', 'minify_release', 'inject_all');
// });

// /**
//  * Background Daemons
//  */
// gulp.task('daemon_html', ['inject_all'], function(){
//     gulp.watch('app/**/*.html', ['inject_all']);
// })
// gulp.task('daemon_ts', ['code_debug'], function(){
//     gulp.watch('app/**/*.ts', ['code_debug']);
// })
// gulp.task('daemon_language', ['copy_languages', 'copy_assets'],    function(){
//     gulp.watch('app/Localisation/**/*.json', ['copy_languages', 'copy_assets']);
// })
// gulp.task("_daemon", ['daemon_html', 'daemon_ts', 'daemon_language']);