/**
 * Angular Web Server.
 *
 * ---------------------------------------------------------------
 *
 * Web server for angular app.
 *
 */

module.exports = function(gulp, plugins, growl) {
	gulp.task('ngWebserver', function() {
		return gulp.src('app')
		    .pipe(plugins.webserver({
                host: 'localhost',
                port: 80,
                livereload: true,
                directoryListing: false,
                fallback: 'index.html',
                open: false,
                https: false,
                middleware: [],
                proxies: [{
                    source: '/api',
                    target: 'localhost:1337/api'
                }]

            }))
			.pipe(plugins.if(growl, plugins.notify({ message: 'Angular web server started' })));
	});
};
