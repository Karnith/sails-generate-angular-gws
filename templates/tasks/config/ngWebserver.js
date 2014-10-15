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
		    .pipe(plugins.webserver(require('../../config/ngwebserver').ngwebserver))
			.pipe(plugins.if(growl, plugins.notify({ message: 'Angular web server started' })));
	});
};
