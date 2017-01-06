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
  	var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  	var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  	// Log proxy requests
  	var morgan  = require('morgan');
  	app.use(morgan('dev'));

  	mocks.forEach(function(route) { route(app); });
  	proxies.forEach(function(route) { route(app); });
//Above is Ember-CLI Default Needs

  	var express = require('express');
	var mongoose = require('mongoose');

	var app = express();

	app.use(function(req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	    next();
	});

	// mongoose.connect('mongodb://localhost/emberData');
	mongoose.connect(
		'mongodb://Visitor:ShadowsVisitor9@ds145828.mlab.com:45828/lone-do'
		)

	var albumSchema = new mongoose.Schema({
		title: 'string',
		date: 'string',
		platform: 'string',
		imageURL: 'string',
		hourID: 'string'
	});

	var AlbumModel = mongoose.model('album', albumSchema);
	//New lines!
	app.get('/api/',function(req,res) {
		res.send('Working');
	});

	app.listen('4500');//Ports is whatever you wish it to be~

	app.get('/api/albums', function(req,res) {
		AlbumModel.find({},function(err,docs) {
			if(err) {
				res.send({error:err});
			}
			else {
				res.send({album:docs});//album = model;; docs = db.response
			}
		});
	});


// 	/*** Transfer from Server.js ***/
// 	var express = require('express');
// 	var app = express();
// 	var http = require('http');
// 	var server = http.createServer(app);
// 	var bodyParser = require('body-parser');

// 	app.use(express.static(__dirname + '/app'));
// 	app.use(bodyParser());

// 	global.config = require('./config');
// 	global.constants = require('./constants');

// 	//connect to mongodb
// 	console.log('INFO: Connecting to MongoDB...');
// 	console.log('\tURL: ' + global.config.MONGO_URL);
// 	console.log('\tCollections:' + JSON.stringify(global.constants.MONGO_COLLECTIONS));
// 	global.db = require('mongojs').connect(global.config.MONGO_URL, global.constants.MONGO_COLLECTIONS);

// 	//routes
// 	require('./routes/api')(app);

// 	process.on('exit', function() {
// 	  console.log('App is exiting.');
// 	});

// 	//listen for requests
// 	app.listen(global.config.APP_PORT);
// 	console.log('Animal Crossing Project');
// 	console.log('App started on port ' + global.config.APP_PORT);
};