module.exports = function (gulp, plugins) {
	gulp.task('linkAssets', function(cb) {
		plugins.sequence(
            'sails-linker-gulp:devAssets',
            'sails-linker-gulp:devViews',
            'sails-linker-gulp:devTplNg',
			cb
		);
	});
};
