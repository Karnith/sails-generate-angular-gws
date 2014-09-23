sails-generate-angular-gws
===========================

Angular app generator for sails (gulp task &amp; basic app structure in assets). This should only be used to create
new projects, for the time being, as it modifies a few standard sails files like layout.js. If you use this on a project
already started, be sure to backup the layout.js file and your routes in routes.js. This gws version adds a web server
for use with angular if if you want the presentation layer separate from the api layer of sails.

##Install
This should be used with my sails gulp suit of generators. remember to add .sailsrc to directory above
where the project will be created. See my other generators for details.
```sh
$ npm install -g sails-generate-backend-gulp
$ npm install -g sails-generate-gulpfile
$ npm install -g sails-generate-frontend-gulp
$ npm install -g sails-generate-new-gulp
$ npm install -g sails-generate-bower-gulp
$ npm install -g sails-generate-angular-gws
sails new <project name here>
```
add this to .sailsrc of project after it is created:
```sh
{
  "hooks": {
      "grunt": false
  },
  "generators": {
    "modules": {
		"bower": "sails-generate-bower-gulp",
		"auth": "sails-generate-auth",
		"angular": "sails-generate-angular-gws"
	}
  }
}
```
next
```sh
sails generate bower
sails generate angular
npm install
```
Now, a few things need to be added manually for the time being until I have time to make it fully automated.
In  tasks/config/pipeline.js replace everything in ```jsFilesToInject = [ ``` with
```sh
  // Load sails.io before everything else
  'vendor/socket.io-client/socket.io.js',
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',
  'vendor/angular/angular.js',
  'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'vendor/angular-ui-router/release/angular-ui-router.min.js',
  'vendor/angular-ui-utils/ui-utils.min.js',
  'vendor/angular-sails/dist/angular-sails.min.js',
  'vendor/lodash/dist/lodash.min.js',
  'vendor/moment/moment-locales.min.js',
  'vendor/angular-moment/angular-moment.min.js',
  'vendor/angular-translate/angular-translate.min.js',
  'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
  'vendor/ng-table/ng-table.js',
  'vendor/jquery/dist/jquery.min.js',
  'vendor/bootstrap/dist/js/bootstrap.min.js',
  'vendor/**/*.js',
  'src/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js'
```
in ``` config/routes.js ``` change '/': to ``` '/': 'HomeController.index' ```
Do a sails lift and you're ready to start coding.

##Features
- Uses $templateCache for pages in angular which means that the .tpl.html files are only used to create the templates.js
- layout.js is automatically modified with whats needed to run angular
- simple generator
- added web server for angular app on top of sails
