# Yet Another Backbone Boilerplate

My attempt to create a boilerplate for starting a [Backbone.js](http://backbonejs.org/) web application development using modern technologies (as of Jun 2015):

 * ECMAScript 6 - [Babel](https://babeljs.io/)
 * [Browserify](http://browserify.org)
 * [Gulp](http://gulpjs.com)
 * [Handlebars](http://handlebarsjs.com)
 * [less.js](http://lesscss.org)
 * [Autoprefixer](https://github.com/postcss/autoprefixer)
 * [Browsersync](http://www.browsersync.io)

### Usage
First, install Gulp globally:

```shell
$ npm install -g gulp
```

Second, install npm dependencies:

```shell
$ npm install
```

Run development server (port is set to 8080 by default):

```shell
$ gulp
```

To build a minified version of the applicaiton (production mode) simply run:

```shell
$ gulp build
```

### Show popup dialog

```javascript
window.layout.show('popup', new PopupView({
  model: new Backbone.Model({
    title: <title>,
    type: <type>
  })
}));
```

type can be one of the following values:
*  - success
*  - info
*  - warning
*  - error

### Show notification dialog

```javascript
window.layout.show('notification', {
  type: <type>,
  title: <title>,
  message: <message>
});
```

type can be one of the following values:
*  - success
*  - info
*  - warning
*  - error

![Screen01](src/img/screen-notifications.png?raw=true )
![Screen02](src/img/screen-popup.png?raw=true )
![Screen03](src/img/screen-todo.png?raw=true )
