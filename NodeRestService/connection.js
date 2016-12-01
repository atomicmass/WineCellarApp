require('dotenv').config();
var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: process.env.SQLHost, 
  user: process.env.SQLUser, 
  password: process.env.SQLPassword, 
  database: process.env.SQLDatabase});

exports.connection = connection;