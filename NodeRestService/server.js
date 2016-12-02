require('dotenv').config();

var express = require('express');

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



//Estate routes
app.get('/estate', estate.getAll);
app.get('/estate/:name', estate.getOne);
app.post('/estate', estate.insert);

//Style routes
app.get('/style', style.getAll);
app.get('/style/:name', style.getOne);
app.post('/style', style.insert);

//Winetype routes
app.get('/winetype', winetype.getAll);
app.get('/winetype/:name', winetype.getOne);
app.post('/winetype', winetype.insert);

//Wine routes
app.get('/wine', wine.getAll);
app.get('/wine/:name', wine.getOne);
app.post('/wine', wine.insert);



//start the server
var server = app.listen(process.env.Port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Rest service listening at http://%s:%s", host, port);
})


