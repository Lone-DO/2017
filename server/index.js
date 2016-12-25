/*jshint node:true*/

// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
	var globSync   = require('glob').sync;
	var mocks      = globSync('./mocks/**/*.js',
		{ cwd: __dirname }).map(require);
	var proxies    = globSync('./proxies/**/*.js',
		{ cwd: __dirname }).map(require);

	// Log proxy requests
	var morgan  = require('morgan');
	app.use(morgan('dev'));

	mocks.forEach(function(route) { route(app); });
	proxies.forEach(function(route) { route(app); });
	
	/*** Transfer from Server.js ***/
	var express = require('express');
	var app = express();
	var http = require('http');
	var server = http.createServer(app);
	var bodyParser = require('body-parser');

	app.use(express.static(__dirname + '/src'));
	app.use(bodyParser());

	global.config = require('./config');
	global.constants = require('./constants');

	//connect to mongodb
	console.log('INFO: Connecting to MongoDB...');
	console.log('\tURL: ' + global.config.MONGO_URL);
	console.log('\tCollections:' + JSON.stringify(global.constants.MONGO_COLLECTIONS));
	global.db = require('mongojs').connect(global.config.MONGO_URL, global.constants.MONGO_COLLECTIONS);

	//routes
	require('./routes/api')(app);

	process.on('exit', function() {
	  console.log('App is exiting.');
	});

	//listen for requests
	server.listen(global.config.APP_PORT);
	console.log('Animal Crossing Project');
	console.log('App started on port ' + global.config.APP_PORT);
};
