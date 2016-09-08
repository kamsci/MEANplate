var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

// Static folder to include other js, etc files
app.use(express.static(__dirname + '/public/'));
// Initialize bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Include additional logging from Morgan
app.use(require('morgan')('dev'));

// Add Controllers Here //
// app.use('/api/products', require('./controllers/products'));

///////////////////////////////////////////

// Angular Route //
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname '/public/index.html'));
});

// Add Backend API Routes Here //


//////////////////////////////////////////

var server = app.listen(process.env.PORT | 3000);

module.exports = server;