/**
 * Angular Web Server Config
 *
 * ---------------------------------------------------------------
 *
 * Web server config for angular app.
 *
 */
module.exports.ngwebserver = {
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
};