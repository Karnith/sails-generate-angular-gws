# angwebserver

Example application using this generator

## Install
clone this example and run
``sh
npm install
bower install
sails lift
``

use the browser console to add users
```sh
io.socket.get('/user/create?', {name: 'test'}, function(resdata){console.log(resdata)});
```
check with
```sh
io.socket.get('/user', function(resdata){console.log(resdata)});
```
the user should now show in console, all done with web sockets.
