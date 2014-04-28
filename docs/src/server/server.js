var path = require('path'),
	fs = require('fs'),
	express = require('express'),
	socketIO = require('socket.io'),
	webRTC = require('webrtc.io'),
	_ = require('lodash'),
	app = express();

module.exports = function(config, callback) {
	var serverRoot = config.serverRoot;

	app.use(express.static(path.join(serverRoot, '..', 'dist')));
	app.use('/images', express.static(path.join(serverRoot, 'images')));


	var webserver = app.listen(config.port),
		manager = webRTC.listen(config.rtcport),
		io = socketIO.listen(webserver);

	io.set('log level', 0);

	var router = express.Router();

	app.use('/', router);

	return callback(webserver, io, manager);
};