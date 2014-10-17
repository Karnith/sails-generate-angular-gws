module.exports = function (gulp, plugins) {
    gulp.task('compileAssets', function(cb) {
        plugins.sequence(
            'bower:install',
            'bower:copy',
            'clean:dev',
            'jst:dev',
            'coffee:devNg',
            'html2js:dev',
            'less:dev',
            'copy:dev',
            'coffee:dev',
            cb
        );
    });
};