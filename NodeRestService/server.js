require('dotenv').config();

var express = require('express');
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: process.env.SQLHost, 
  user: process.env.SQLUser, 
  password: process.env.SQLPassword, 
  database: process.env.SQLDatabase});

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/estate', function (req, res) {
	connection.query('SELECT * FROM Estate', function (err, results, fields) {
  		res.end(JSON.stringify(results));
	});
})

app.get('/estate/:id', function(req, res) {
  connection.query('SELECT * FROM Estate where estateId = ?', [req.params.id], 
    function (err, results, fields) {
      res.end(JSON.stringify(results));
  });
});

app.post('/estate', upload.array(), function(req, res, next) {
  connection.execute('insert into Estate(estateName) values(?);', [req.body['estateName']],
    function(err, results, fields){
      console.log(err);
     });

  res.json(req.body);
})

var server = app.listen(process.env.Port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Rest service listening at http://%s:%s", host, port);

})


