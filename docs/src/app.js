var fs = require('fs'),
	path = require('path'),
	server = require('./server/server');

var startServer = function(config, callback) {
	server(config, callback);
};

exports.startServer = startServer;
exports.startServer({
	port: 4000,
	rtcport: 3999,
	serverRoot: __dirname,
	repoLocation: path.join(__dirname, './../../')
}, function(webserver, io, rtc) { });