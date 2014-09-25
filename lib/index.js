/**
 * sails-generate-bower
 *
 * Usage:
 * `sails generate bower`
 *
 * @type {Object}
 */

var path = require('path'),
    merge = require('./merge-json'),
    insertAfter = require('./insert-after'),
    update = require('./update');

var templates = require('path').resolve(__dirname,'../templates');

module.exports = {

	templatesDirectory: templates,

	before: require('./before'),

	targets: {

        './assets/images/logos': { folder: {} },
        './assets/images/logos/angularjs.png': { copy: 'assets/images/logos/angularjs.png' },
        './assets/images/logos/nodejs.png': { copy: 'assets/images/logos/nodejs.png' },
        './assets/images/logos/sails-logo.png': { copy: 'assets/images/logos/sails-logo.png' },
        './assets/src': { folder: {} },
        './assets/src/app': { folder: {} },
        './assets/src/app/app.coffee': { template: 'assets/src/app/app.coffee' },
        './assets/src/app/about': { folder: {} },
        './assets/src/app/about/index.coffee': { template: 'assets/src/app/about/index.coffee' },
        './assets/src/app/about/index.tpl.html': { template: 'assets/src/app/about/index.tpl.html' },
        './assets/src/app/header': { folder: {} },
        './assets/src/app/header/index.coffee': { template: 'assets/src/app/header/index.coffee' },
        './assets/src/app/header/index.tpl.html': { template: 'assets/src/app/header/index.tpl.html' },
        './assets/src/app/home': { folder: {} },
        './assets/src/app/home/index.coffee': { template: 'assets/src/app/home/index.coffee' },
        './assets/src/app/home/index.tpl.html': { template: 'assets/src/app/home/index.tpl.html' },
        './assets/src/app/users': { folder: {} },
        './assets/src/app/users/index.coffee': { template: 'assets/src/app/users/index.coffee' },
        './assets/src/app/users/index.tpl.html': { template: 'assets/src/app/users/index.tpl.html' },
        './assets/src/common': { folder: {} },
        './assets/src/common/directives': { folder: {} },
        './assets/src/common/directives/blink.coffee': { template: 'assets/src/common/directives/blink.coffee' },
        './assets/src/common/models': { folder: {} },
        './assets/src/common/models/index.coffee': { template: 'assets/src/common/models/index.coffee' },
        './assets/src/common/models/User.coffee': { template: 'assets/src/common/models/User.coffee' },
        './assets/src/common/services': { folder: {} },
        './assets/src/common/services/config.coffee': { template: 'assets/src/common/services/config.coffee' },
        './assets/src/common/services/index.coffee': { template: 'assets/src/common/services/index.coffee' },
        './assets/src/common/services/lodash.coffee': { template: 'assets/src/common/services/lodash.coffee' },
        './assets/src/common/services/title.coffee': { template: 'assets/src/common/services/title.coffee' },
        './assets/src/common/services/utils.coffee': { template: 'assets/src/common/services/utils.coffee' },
        './assets/js/socketConfig.js': { template: 'assets/js/socketConfig.js' },
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-angular-gws) @ `'+scope.rootPath+'`...'); cb(); }},
		'./bower.json': { exec: merge(path.join(templates, 'bower.json'))},
		'./tasks/config/html2js.js': {copy: path.join(templates, '/tasks/config/html2js.js')},
        './tasks/config/ngWebserver.js': {copy: path.join(templates, '/tasks/config/ngWebserver.js')},

        './tasks/pipeline.js': { exec: update(path.join(templates, '/tasks/pipeline.js'))},
        './tasks/config/clean.js': { exec: update(path.join(templates, '/tasks/config/clean.js'))},
        './tasks/config/coffee.js': { exec: update(path.join(templates, '/tasks/config/coffee.js'))},
        './tasks/config/copy.js': { exec: update(path.join(templates, '/tasks/config/copy.js'))},
        './tasks/config/images.js': { exec: update(path.join(templates, '/tasks/config/images.js'))},
        './tasks/config/jst.js': { exec: update(path.join(templates, '/tasks/config/jst.js'))},
        './tasks/config/less.js': { exec: update(path.join(templates, '/tasks/config/less.js'))},
        './tasks/config/sails-linker-gulp.js': { exec: update(path.join(templates, '/tasks/config/sails-linker-gulp.js'))},
		'./package.json': { exec: merge(path.join(templates, 'package.json')) },
        './tasks/register/compileAssets.js': { exec: update(path.join(templates, '/tasks/register/compileAssets.js'))},
        './tasks/register/linkAssets.js': { exec: update(path.join(templates, '/tasks/register/linkAssets.js'))},
        './tasks/register/default.js': { exec: update(path.join(templates, '/tasks/register/default.js'))}
    }
};
