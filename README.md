sails-generate-angular-gws
===========================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Karnith/sails-generate-angular-gws?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
##Framework Change
By default the sails angular generator with web server is added to the .sailsrc file.
If you would like to use the standard sails angular generator that is integrated with sails routes, controllers, etc
change the .sailsrc file for angular to

```sh
'sails-generator-angular-gulp'
```
by switching out the -gws with -gulp before doing a sails generate bower.

then
```sh
sails generate bower
sails generate angular
npm install
```
Do a sails lift and you're ready to start coding.

##Features
- Uses $templateCache for pages in angular which means that the .tpl.html files are only used to create the templates.js
- simple generator
- added web server for angular app on top of sails
- both Sails and angular app can host pages independently with slight modification of pipeline.js
