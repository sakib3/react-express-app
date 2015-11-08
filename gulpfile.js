var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
//browsersync-->Your scroll, click, refresh and form actions are mirrored between browsers while you test
var browserSync = require('browser-sync');

var browserify = require('browserify');
//take data format for gulp and to kind of format to node/express
var source = require('vinyl-source-stream');
//jsx to js converter
var reactify = require('reactify');


// gup task : gulp live-server
// whenever we change main.js it will restart the server
gulp.task('live-server',function(){
	var server = new LiveServer('server/main.js');
	server.start();
})

// jsx to js conversion.....
gulp.task('bundle', function(){
	return browserify({
		// starting point grab the file
		entries: 'app/main.jsx',
		debug: true, // to improve the console output
	})
	.transform(reactify)
	.bundle() // ready for use ... raps up
	.pipe(source('app.js')) // output file
	.pipe(gulp.dest('./.tmp')); //destination folder
})


//new task where serve is dependent on live-server i.e. run before it...
gulp.task('serve',['live-server'],function(){
	browserSync.init(null,{
		proxy: "http://localhost:3000",
		port:7000
	})
})
