require('dotenv').config();

var express = require('express');
var cors = require('cors');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var estate = require('./services/estateService');
var style = require('./services/styleService');
var winetype = require('./services/winetypeService');
var wine = require('./services/wineService');

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var setHeader = function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Content-Type", "application/json");
	next();
}


var setImageHeader = function (request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Content-Type", "application/bas64");
	app.use(bodyParser.raw());
	next();
}

//Estate routes
app.options('/estate', cors());
app.get('/estate', [setHeader, estate.getAll]);
app.get('/estate/:name', [setHeader, estate.getOne]);
app.post('/estate', [setHeader, estate.insert]);

//Style routes
app.options('/style', cors());
app.get('/style', [setHeader, style.getAll]);
app.get('/style/:name', [setHeader, style.getOne]);
app.post('/style', [setHeader, style.insert]);

//Winetype routes
app.options('/winetype', cors());
app.get('/winetype', [setHeader, winetype.getAll]);
app.get('/winetype/:name', [setHeader, winetype.getOne]);
app.post('/winetype', [setHeader, winetype.insert]);

//Wine routes
app.options('/wine', cors());
app.options('/wine/:id', cors());
app.get('/wine', [setHeader, wine.getAll]);
app.get('/wine/:name', [setHeader, wine.getOne]);
app.post('/wine', [setHeader, wine.insert]);
app.delete('/wine/:id', [setHeader, wine.delete]);

app.options('/wine/search', cors());
app.post('/wine/search', [setHeader, wine.search]);

app.options('/wine/image', cors());
app.post('/wine/image', [setImageHeader, wine.saveImage]);



//start the server
var server = app.listen(process.env.Port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Rest service listening at http://%s:%s", host, port);
})


