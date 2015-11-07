var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
//browsersync-->Your scroll, click, refresh and form actions are mirrored between browsers while you test
var browserSync = require('browser-sync');

// gup task : gulp live-server
// whenever we change main.js it will restart the server
gulp.task('live-server',function(){
	var server = new LiveServer('server/main.js');
	server.start();
})

//new task where serve is dependent on live-server i.e. run before it...
gulp.task('serve',['live-server'],function(){
	browserSync.init(null,{
		proxy: "http://localhost:1971",
		port:1987
	})
})