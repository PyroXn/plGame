
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

//log
var passport = require('passport');
var flash 	 = require('connect-flash');
var configDB = require('./models/database.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
  app.use(express.session({ secret: 'jaimelesgroszizi' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes ======================================================================
require('./controllers/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
