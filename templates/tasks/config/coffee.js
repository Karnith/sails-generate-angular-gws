/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 */
module.exports = function(gulp, plugins, growl) {
	gulp.task('coffee:dev', function() {
		gulp.src('assets/js/**/**.coffee')
		.pipe(plugins.coffee({bare: true}).on('error', plugins.util.log))
		.pipe(gulp.dest('app/js/'))
		.pipe(plugins.if(growl, plugins.notify({ message: 'Coffee compile task complete' })));
	});

	gulp.task('coffee:devNg', function() {
        gulp.src('assets/src/**/**.coffee')
            .pipe(plugins.ngClassify({
                animation: {format: '*', prefix: 'Ani'},
                constant: {format: '*'},
                controller: {format: '*', suffix: ''},
                directive: {format: '*'},
                factory: {format: '*'},
                filter: {format: '*'},
                provider: {format: '*', suffix: ''},
                service: {format: '*', suffix: ''},
                value: {format: '*'}
            }))
            .pipe(plugins.coffee({bare: false}).on('error', plugins.util.log))
            .pipe(gulp.dest('app/src'))
            .pipe(plugins.if(growl, plugins.notify({ message: 'Coffee compile task complete' })));
    });
};
